import {
  Component,
  OnInit,
  TemplateRef,
  AfterContentInit,
  QueryList,
  ContentChildren,
} from '@angular/core';

import { PartDirective } from '../../directives/part.directive';

@Component({
  selector: 'glp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterContentInit {
  @ContentChildren(PartDirective, { read: PartDirective }) inputs: QueryList<
    PartDirective
  >;

  headerRef: TemplateRef<any>;

  middleRef: TemplateRef<any>;

  footerRef: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.headerRef = this.getCardPart('header');
    this.middleRef = this.getCardPart('middle');
    this.footerRef = this.getCardPart('footer');
  }

  private getCardPart(part: string) {
    const directive = this.inputs.find(dir => dir.part === part);
    return directive ? directive.templateRef : undefined;
  }
}
