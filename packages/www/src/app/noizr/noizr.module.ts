import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NoizerRoutingModule } from "./noizr-routing.module";
import { BoxComponent } from "./components/box/box.component";
import { CableComponent } from "./components/cable/cable.component";
import { NoizerPageComponent } from "./components/noizer-page/noizer-page.component";

@NgModule({
  declarations: [BoxComponent, CableComponent, NoizerPageComponent],
  imports: [
    CommonModule,
    NoizerRoutingModule
  ],
  entryComponents: [NoizerPageComponent],
})
export class NoizerModule { }
