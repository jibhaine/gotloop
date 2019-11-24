import { CommentModel } from './comment.model';

/**
 * Loop is our main model class.
 */
export class LoopModel {
  public title: string;
  public description: string;
  public bpm: number;
  public count: number;
  public duration: number;
  public tags?: string[];
  public isCommentable: boolean;

  public comments?: CommentModel[] = [];
  public isSharable?: boolean;
  public creationDate?: number;
}

export function loopFactory(): LoopModel {
  return {
    bpm: 123,
    creationDate: Date.now(),
    description: '',
    duration: 0.0,
    count: 0,
    isCommentable: true,
    comments: [],
    isSharable: true,
    tags: [],
    title: '',
  };
}
