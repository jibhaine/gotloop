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
import { CardContentComponent } from './components/card/card-content.component';
import { CardFooterComponent } from './components/card/card-footer.component';
import { CardHeaderComponent } from './components/card/card-header.component';

@NgModule({
  declarations: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    HeaderComponent,
    IconComponent,
    HeaderSearchComponent,
    FooterComponent,
    ContentPageComponent,
    PartDirective,
  ],
  exports: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    HeaderComponent,
    IconComponent,
    HeaderSearchComponent,
    FooterComponent,
    ContentPageComponent,
    PartDirective,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ShellModule {}
