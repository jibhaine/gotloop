import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoopsRoutingModule } from "./loops-routing.module";
import { LoopListComponent } from "./components/loop-list/loop-list.component";
import { LoopsLoaderComponent } from "./components/loops-loader/loops-loader.component";

@NgModule({
  declarations: [LoopListComponent, LoopsLoaderComponent],
  imports: [
    CommonModule,
    LoopsRoutingModule
  ]
})
export class LoopsModule { }
