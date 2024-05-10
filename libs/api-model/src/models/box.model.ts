export enum BoxType {
  Generator,
  Filter,
}

export interface BoxUI {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Box {
  id: string;
  ui: BoxUI;
  type: BoxType;
}
