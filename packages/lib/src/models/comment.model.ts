import { JsonProperty } from 'json-typescript-mapper';

import { UserModel } from "./user.model";

/**
 * Modelize a user comment on a loop.
 */
export class CommentModel {

  @JsonProperty('id')
  uuid: string;

  @JsonProperty('date')
  createdAt: Date;

  @JsonProperty('author')
  author: UserModel;

  @JsonProperty('content')
  content: string;

  @JsonProperty('avatar')
  avatar: string;
}

export default Comment;
