import { JsonProperty } from 'json-typescript-mapper';

export class UserModel {
  @JsonProperty('name')
  public name: string;
  @JsonProperty('avatar')
  public avatar: string;

}
