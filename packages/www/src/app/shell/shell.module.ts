import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/header/header.component";
import { IconComponent } from "./components/icon/icon.component";
import { HeaderSearchComponent } from "./components/header-search/header-search.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentPageComponent } from "./components/content-page/content-page.component";

@NgModule({
  declarations: [CardComponent, HeaderComponent, IconComponent, HeaderSearchComponent, FooterComponent, ContentPageComponent],
  exports: [CardComponent, HeaderComponent, IconComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ShellModule { }
