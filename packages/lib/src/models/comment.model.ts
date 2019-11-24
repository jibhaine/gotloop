import { UserModel } from './user.model';

/**
 * Modelize a user comment on a loop.
 */
export class CommentModel {
  public uuid: string;

  public createdAt: Date;

  public author: UserModel;

  public content: string;

}

export default Comment;
