import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsPageComponent } from './core/components/icons-page/icons-page.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';

const routes: Routes = [
  /*{
    path: '/',
    component: HomePage,
  },*/
  {
    path: 'loops',
    loadChildren: './loops/loops.module#LoopsModule',
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'loop/:id',
    loadChildren: './loop-detail/loop-detail.module#LoopDetailModule',
  },
  {
    path: 'loop/:id/edit',
    loadChildren: './loop-editor/loop-editor.module#LoopEditorModule',
  },
  {
    path: 'noizr',
    loadChildren: './noizr/noizr.module#NoizerModule',
  },
  {
    path: 'icons',
    component: IconsPageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
