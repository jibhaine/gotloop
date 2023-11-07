import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LoopEntity } from './loop.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToOne((type) => LoopEntity, (loop) => loop.comments)
  loop: LoopEntity;
}
