import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './components/box/box.component';
import { CableComponent } from './components/cable/cable.component';



@NgModule({
  declarations: [BoxComponent, CableComponent],
  exports: [BoxComponent, CableComponent],
  imports: [
    CommonModule
  ]
})
export class GraphModule { }
