import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoopCutterComponent } from './components/loop-cutter/loop-cutter.component';
import { LoopUploadComponent } from './components/loop-upload/loop-upload.component';
import { LoopRecordComponent } from './components/loop-record/loop-record.component';
import { LoopEditorComponent } from './components/loop-editor/loop-editor.component';
import { LoopFormComponent } from './components/loop-form/loop-form.component';
import { LoopEditorRoutingModule } from './loop-editor-routing.module';

@NgModule({
  declarations: [
    LoopCutterComponent,
    LoopUploadComponent,
    LoopRecordComponent,
    LoopEditorComponent,
    LoopFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoopEditorRoutingModule,
  ],
})
export class LoopEditorModule {}
