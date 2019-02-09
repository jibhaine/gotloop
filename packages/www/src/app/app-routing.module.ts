import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  /*{
    path: '/',
    component: HomePage,
  },*/
  {
    path: "loops",
    loadChildren: "./loops/loops.module#LoopsModule",
  },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule",
  },
  {
    path: "loop",
    loadChildren: "./loop/loop.module#LoopModule",
  },
  {
    path: "noizr",
    loadChildren: "./noizr/noizr.module#NoizerModule",
  },
  {
    path: "",
    redirectTo: "loops",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
