import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn,
  AfterUpdate,
  BeforeUpdate,
} from 'typeorm';

import { UserEntity } from '../user/user.entity';
import { Comment } from './comment.entity';

@Entity('loop')
export class LoopEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @Column('simple-array')
  tagList: string[];

  @ManyToOne((type) => UserEntity, (user) => user.loops)
  author: UserEntity;

  @OneToMany((type) => Comment, (comment) => comment.loop, { eager: true })
  @JoinColumn()
  comments: Comment[];

  @Column({ default: 0 })
  favoriteCount: number;
}
