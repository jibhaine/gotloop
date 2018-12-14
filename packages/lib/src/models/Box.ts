//types

export enum BoxType{
  Generator,
  Filter,
}
export interface BoxUI{
  @JsonProperty()
  x: number;
  @JsonProperty()
  y: number;
  @JsonProperty()
  w: number;
  @JsonProperty()
  h: number;

}

export default class Box{
  id: string;
  ui: BoxUI;
  type: BoxType;
    constructor({x,y,w,h,type,content}){

    }
}
