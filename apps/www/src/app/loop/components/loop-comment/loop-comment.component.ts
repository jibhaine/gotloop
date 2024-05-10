import { Component, Input, OnInit } from '@angular/core';

import { CommentModel } from '@gotloop/api-model';

@Component({
  selector: 'glp-loop-comment',
  templateUrl: './loop-comment.component.html',
  styleUrls: ['./loop-comment.component.scss'],
  standalone: true,
})
export class LoopCommentComponent implements OnInit {
  @Input()
  public comment: CommentModel;
  constructor() {}

  ngOnInit() {}
}
