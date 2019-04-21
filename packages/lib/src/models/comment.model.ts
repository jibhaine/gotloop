import { JsonProperty } from 'json-typescript-mapper';

import { UserModel } from './user.model';

/**
 * Modelize a user comment on a loop.
 */
export class CommentModel {
  @JsonProperty('uuid')
  public uuid: string;

  @JsonProperty('date')
  public createdAt: Date;

  @JsonProperty('author')
  public author: UserModel;

  @JsonProperty('content')
  public content: string;

}

export default Comment;
