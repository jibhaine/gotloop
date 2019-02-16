import { UserData } from '../user/user.interface';
import { LoopEntity } from './loop.entity';
interface Comment {
  body: string;
}

interface LoopData {
  slug: string;
  title: string;
  description: string;
  body?: string;
  tagList?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  favorited?: boolean;
  favoritesCount?: number;
  author?: UserData;
}

export interface CommentsRO {
  comments: Comment[];
}

export interface LoopRO {
  loop: LoopEntity;
}

export interface LoopsRO {
  loops: LoopEntity[];
  loopsCount: number;
}
