import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoopCutterComponent } from './components/loop-cutter/loop-cutter.component';
import { LoopUploadComponent } from './components/loop-upload/loop-upload.component';
import { LoopRecordComponent } from './components/loop-record/loop-record.component';
import { LoopEditorComponent } from './components/loop-editor/loop-editor.component';
import { StoreModule } from '@ngrx/store';
import * as fromLoopEditor from './reducers/loop-editor.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoopEditorEffects } from './effects/loop-editor.effects';
import { LoopFormComponent } from './components/loop-form/loop-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoopEditorRoutingModule } from './loop-editor-routing.module';

@NgModule({
  declarations: [LoopCutterComponent, LoopUploadComponent, LoopRecordComponent, LoopEditorComponent, LoopFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoopEditorRoutingModule,
    StoreModule.forFeature('loopEditor', fromLoopEditor.reducer),
    EffectsModule.forFeature([LoopEditorEffects])
  ]
})
export class LoopEditorModule { }
