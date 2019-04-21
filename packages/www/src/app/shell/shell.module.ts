import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { PartDirective } from './directives/part.directive';

@NgModule({
  declarations: [CardComponent, HeaderComponent, IconComponent, HeaderSearchComponent, FooterComponent, ContentPageComponent, PartDirective],
  exports: [CardComponent, HeaderComponent, IconComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class ShellModule { }
