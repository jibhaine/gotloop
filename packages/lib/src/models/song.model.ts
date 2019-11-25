import { JsonProperty } from 'json-typescript-mapper';
import { LoopModel } from './loop.model';

export class SongModel {
  @JsonProperty({ name: 'loops', clazz: LoopModel })
  public loops: LoopModel[];
}
