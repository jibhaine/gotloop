//types
import { JsonProperty } from "json-typescript-mapper";

export enum BoxType {
  Generator,
  Filter,
}

export class BoxUI {
  @JsonProperty()
  public x: number;
  @JsonProperty()
  y: number;
  @JsonProperty()
  w: number;
  @JsonProperty()
  h: number;
}

export default class Box {
  @JsonProperty()
  id: string;
  @JsonProperty()
  ui: BoxUI;
  @JsonProperty()
  type: BoxType;
}
