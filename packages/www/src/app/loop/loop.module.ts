import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoopPlayerComponent } from './components/loop-player/loop-player.component';
import { LoopCommentComponent } from './components/loop-comment/loop-comment.component';
import { LoopRecordComponent } from './components/loop-record/loop-record.component';

@NgModule({
  declarations: [LoopPlayerComponent, LoopCommentComponent, LoopRecordComponent],
  imports: [
    CommonModule
  ]
})
export class LoopModule { }
