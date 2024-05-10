import { Component, Input } from '@angular/core';
import { CommentModel } from '@gotloop/api-model';
import { LoopCommentComponent } from '../loop-comment/loop-comment.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'glp-loop-comments',
  templateUrl: './loop-comments.component.html',
  styleUrls: ['./loop-comments.component.scss'],
  standalone: true,
  imports: [NgFor, LoopCommentComponent],
})
export class LoopCommentsComponent {
  @Input()
  comments?: CommentModel[] = [];
}
