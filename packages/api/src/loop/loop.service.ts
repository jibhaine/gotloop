import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import * as slugFn from 'slug';

import { LoopEntity } from './loop.entity';
import { Comment } from './comment.entity';
import { UserEntity } from '../user/user.entity';
import { FollowsEntity } from '../profile/follows.entity';
import { CreateLoopDto } from './dto';

import { LoopRO, LoopsRO, CommentsRO } from './loop.interface';

@Injectable()
export class LoopService {
  constructor(
    @InjectRepository(LoopEntity)
    private readonly loopRepository: Repository<LoopEntity>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FollowsEntity)
    private readonly followsRepository: Repository<FollowsEntity>,
  ) {}

  async findAll(query): Promise<LoopsRO> {
    const qb = await getRepository(LoopEntity)
      .createQueryBuilder('loop')
      .leftJoinAndSelect('loop.author', 'author');

    qb.where('1 = 1');

    if ('tag' in query) {
      qb.andWhere('loop.tagList LIKE :tag', { tag: `%${query.tag}%` });
    }

    if ('author' in query) {
      const author = await this.userRepository.findOne({
        username: query.author,
      });
      qb.andWhere('loop.authorId = :id', { id: author.id });
    }

    if ('favorited' in query) {
      const author = await this.userRepository.findOne({
        username: query.favorited,
      });
      const ids = author.favorites.map(el => el.id);
      qb.andWhere('loop.authorId IN (:ids)', { ids });
    }

    qb.orderBy('loop.created', 'DESC');

    const loopsCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const loops = await qb.getMany();

    return { loops, loopsCount };
  }

  async findFeed(userId: number, query): Promise<LoopsRO> {
    const follows = await this.followsRepository.find({ followerId: userId });
    const ids = follows.map(el => el.followingId);

    const qb = await getRepository(LoopEntity)
      .createQueryBuilder('loop')
      .where('loop.authorId IN (:ids)', { ids });

    qb.orderBy('loop.created', 'DESC');

    const loopsCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const loops = await qb.getMany();

    return { loops, loopsCount };
  }

  async findOne(where): Promise<LoopRO> {
    const loop = await this.loopRepository.findOne(where);
    return { loop };
  }

  async addComment(slug: string, commentData): Promise<LoopRO> {
    let loop = await this.loopRepository.findOne({ slug });

    const comment = new Comment();
    comment.body = commentData.body;

    loop.comments.push(comment);

    await this.commentRepository.save(comment);
    loop = await this.loopRepository.save(loop);
    return { loop };
  }

  async deleteComment(slug: string, id: string): Promise<LoopRO> {
    let loop = await this.loopRepository.findOne({ slug });

    const comment = await this.commentRepository.findOne(id);
    const deleteIndex = loop.comments.findIndex(
      eachComment => eachComment.id === comment.id,
    );

    if (deleteIndex >= 0) {
      const deleteComments = loop.comments.splice(deleteIndex, 1);
      await this.commentRepository.delete(deleteComments[0].id);
      loop = await this.loopRepository.save(loop);
      return { loop };
    } else {
      return { loop };
    }
  }

  async favorite(id: number, slug: string): Promise<LoopRO> {
    let loop = await this.loopRepository.findOne({ slug });
    const user = await this.userRepository.findOne(id);

    const isNewFavorite =
      user.favorites.findIndex(eachLoop => eachLoop.id === loop.id) < 0;
    if (isNewFavorite) {
      user.favorites.push(loop);
      loop.favoriteCount++;

      await this.userRepository.save(user);
      loop = await this.loopRepository.save(loop);
    }

    return { loop };
  }

  async unFavorite(id: number, slug: string): Promise<LoopRO> {
    let loop = await this.loopRepository.findOne({ slug });
    const user = await this.userRepository.findOne(id);

    const deleteIndex = user.favorites.findIndex(
      eachLoop => eachLoop.id === loop.id,
    );

    if (deleteIndex >= 0) {
      user.favorites.splice(deleteIndex, 1);
      loop.favoriteCount--;

      await this.userRepository.save(user);
      loop = await this.loopRepository.save(loop);
    }

    return { loop };
  }

  async findComments(slug: string): Promise<CommentsRO> {
    const loop = await this.loopRepository.findOne({ slug });
    return { comments: loop.comments };
  }

  async create(userId: number, loopData: CreateLoopDto): Promise<LoopEntity> {
    const loop = new LoopEntity();
    loop.title = loopData.title;
    loop.description = loopData.description;
    loop.slug = this.slugify(loopData.title);
    loop.tagList = loopData.tagList || [];
    loop.comments = [];

    const newLoop = await this.loopRepository.save(loop);

    const author = await this.userRepository.findOne(userId);

    if (Array.isArray(author.loops)) {
      author.loops.push(loop);
    } else {
      author.loops = [loop];
    }

    await this.userRepository.save(author);

    return newLoop;
  }

  async update(slug: string, loopData: any): Promise<LoopRO> {
    const toUpdate = await this.loopRepository.findOne({ slug });
    const updated = Object.assign(toUpdate, loopData);
    const loop = await this.loopRepository.save(updated);
    return { loop };
  }

  async delete(slug: string): Promise<DeleteResult> {
    return await this.loopRepository.delete({ slug });
  }

  slugify(title: string) {
    return (
      slugFn(title, { lower: true }) +
      '-' +
      (Math.random() * Math.pow(36, 6) || 0).toString(36)
    );
  }
}
