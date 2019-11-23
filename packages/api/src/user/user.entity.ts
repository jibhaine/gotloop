import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { IsEmail, Validate } from 'class-validator';
import * as crypto from 'crypto';
import { LoopEntity } from '../loop/loop.entity';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({default: ''})
  bio: string;

  @Column({default: ''})
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @ManyToMany(type => LoopEntity)
  @JoinTable()
  favorites: LoopEntity[];

  @OneToMany(type => LoopEntity, loop => loop.author)
  loops: LoopEntity[];
}
