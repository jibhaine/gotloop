import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  /*{
    path: '/',
    component: HomePage
  }*/
  {
    path: "loops",
    loadChildren: "./loops/loops.module"
  },
  {
    path: "user",
    loadChildren: "./user/user.module"
  },
  {
    path: "loop",
    loadChildren: "./loop/loop.module"
  },
  {
    path: "noizr",
    loadChildren: "./noizr/noizr.module"
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
