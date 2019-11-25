//types
import { JsonProperty } from 'json-typescript-mapper';

export enum BoxType {
  Generator,
  Filter,
}

export class BoxUI {
  @JsonProperty('x')
  public x: number;
  @JsonProperty('y')
  y: number;
  @JsonProperty('w')
  w: number;
  @JsonProperty('h')
  h: number;
}

export default class Box {
  @JsonProperty('i')
  id: string;
  @JsonProperty('ui')
  ui: BoxUI;
  @JsonProperty('t')
  type: BoxType;
}
