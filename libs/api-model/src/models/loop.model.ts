import { nanoid } from 'nanoid';

import { CommentModel } from './comment.model';
import { UserModel } from './user.model';

/**
 * Loop is our main model class.
 */
export interface LoopModel {
  id: string;
  author?: UserModel;
  title: string;
  description: string;
  bpm: number;
  count: number;
  duration: number;
  tags?: string[];
  isCommentable: boolean;
  comments?: CommentModel[];
  isSharable?: boolean;
  creationDate?: Date;
}

export function loopFactory(): LoopModel {
  return {
    id: nanoid(),
    bpm: 123,
    creationDate: new Date(),
    description: '',
    duration: 0.0,
    count: 0,
    isCommentable: true,
    comments: [],
    isSharable: true,
    tags: [],
    title: '',
  };
}
