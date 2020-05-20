import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchIconComponent } from './components/batch-icon/batch-icon.component';



@NgModule({
  declarations: [BatchIconComponent],
  exports: [BatchIconComponent],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }

// rexport icons
export * from './batch-icons';
