import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoopRecordComponent } from './components/loop-record/loop-record.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'record',
  },
  {
    path: 'record',
    component: LoopRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoopRoutingModule { }
