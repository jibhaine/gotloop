import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoopPlayerComponent } from './components/loop-player/loop-player.component';
import { LoopCommentComponent } from './components/loop-comment/loop-comment.component';
import { LoopRecordComponent } from './components/loop-record/loop-record.component';
import { LoopPlayerVizComponent } from './components/loop-player-viz/loop-player-viz.component';
import { LoopCommentsComponent } from './components/loop-comments/loop-comments.component';
import { LoopCommentFormComponent } from './components/loop-comment-form/loop-comment-form.component';

import { ShellModule } from '../shell/shell.module';

@NgModule({
  declarations: [LoopPlayerComponent, LoopCommentComponent, LoopRecordComponent, LoopPlayerVizComponent, LoopCommentsComponent, LoopCommentFormComponent],
  exports: [LoopPlayerComponent, LoopRecordComponent],
  imports: [
    CommonModule, ShellModule,
  ]
})
export class LoopModule { }
