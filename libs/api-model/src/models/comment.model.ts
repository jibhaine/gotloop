import { UserModel } from './user.model';

/**
 * Modelize a user comment on a loop.
 */
export interface CommentModel {
  uuid: string;
  createdAt: Date;
  author: UserModel;
  content: string;
}
