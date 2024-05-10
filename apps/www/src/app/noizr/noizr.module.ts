import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { NoizerRoutingModule } from './noizr-routing.module';
import { NoizerPageComponent } from './components/noizer-page/noizer-page.component';
import { ShellModule } from '../shell/shell.module';

import { GraphModule } from '@gotloop/simpl';

@NgModule({
    declarations: [NoizerPageComponent],
    imports: [
        CommonModule,
        NoizerRoutingModule,
        ShellModule,
        AngularDraggableModule,
        GraphModule,
    ]
})
export class NoizerModule {}
