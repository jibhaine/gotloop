//types
export enum BoxType {
  Generator,
  Filter,
}

export class BoxUI {
  public x: number;
  y: number;
  w: number;
  h: number;
}

export default class Box {
  id: string;
  ui: BoxUI;
  type: BoxType;
}
