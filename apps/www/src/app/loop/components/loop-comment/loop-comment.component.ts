import { Component, Input } from '@angular/core';

import { CommentModel } from '@gotloop/api-model';

@Component({
  selector: 'glp-loop-comment',
  templateUrl: './loop-comment.component.html',
  styleUrls: ['./loop-comment.component.scss'],
  standalone: true,
})
export class LoopCommentComponent {
  @Input()
  public comment!: CommentModel;
}
