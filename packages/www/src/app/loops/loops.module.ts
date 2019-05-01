import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoopsRoutingModule } from './loops-routing.module';
import { LoopListComponent } from './components/loop-list/loop-list.component';
import { LoopsLoaderComponent } from './components/loops-loader/loops-loader.component';
import { LoopModule } from '../loop/loop.module';
import { LoopsService } from './services/loops.service';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  declarations: [LoopListComponent, LoopsLoaderComponent],
  imports: [
    CommonModule,
    ShellModule,
    LoopModule,
    LoopsRoutingModule
  ],
})
export class LoopsModule { }
