//types
import { JsonProperty, JsonObject } from 'json2typescript';

export enum BoxType {
  Generator,
  Filter,
}

@JsonObject('BoxUI')
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

@JsonObject('Box')
export default class Box {
  @JsonProperty('i')
  id: string;
  @JsonProperty('ui')
  ui: BoxUI;
  @JsonProperty('t')
  type: BoxType;
}
