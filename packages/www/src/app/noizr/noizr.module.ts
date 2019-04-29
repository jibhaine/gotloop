import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { NoizerRoutingModule } from './noizr-routing.module';
import { BoxComponent } from './components/box/box.component';
import { CableComponent } from './components/cable/cable.component';
import { NoizerPageComponent } from './components/noizer-page/noizer-page.component';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  declarations: [BoxComponent, CableComponent, NoizerPageComponent],
  imports: [
    CommonModule,
    NoizerRoutingModule,
    ShellModule,
    AngularDraggableModule,
  ],
  entryComponents: [NoizerPageComponent],
})
export class NoizerModule { }
