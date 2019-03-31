import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleDirective } from './directives/ripple.directive';

@NgModule({
  declarations: [RippleDirective],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
