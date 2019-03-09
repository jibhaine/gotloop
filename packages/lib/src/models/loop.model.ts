import { JsonProperty } from 'json-typescript-mapper';

/**
 * Loop is our main model class.
 */
export class LoopModel {
  @JsonProperty('title')
  public title: string;
  @JsonProperty('desc')
  public description: string;
  @JsonProperty('bpm')
  public bpm: number;
  @JsonProperty('dur')
  public duration: number;
  @JsonProperty('tags')
  public tags: string[];
  @JsonProperty('com')
  public isCommentable: boolean;
  @JsonProperty('shar')
  public isSharable: boolean;
  @JsonProperty('dat')
  public creationDate: number;
}

export function loopFactory(): LoopModel {
  return {
    bpm: 123,
    creationDate: Date.now(),
    description: '',
    duration: 0.0,
    isCommentable: true,
    isSharable: true,
    tags: [],
    title: '',
  };
}
