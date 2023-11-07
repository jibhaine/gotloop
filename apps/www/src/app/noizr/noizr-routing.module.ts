import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoizerPageComponent } from './components/noizer-page/noizer-page.component';

const routes: Routes = [
  {
    path: '',
    component: NoizerPageComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoizerRoutingModule {}
