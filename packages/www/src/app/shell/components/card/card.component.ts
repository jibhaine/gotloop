import {
  Component,
  OnInit,
  TemplateRef,
  AfterContentInit,
  QueryList,
  ContentChildren,
} from '@angular/core';

import { PartDirective } from '../../directives/part.directive';
import { getPreviousOrParentTNode } from '@angular/core/src/render3/state';

@Component({
  selector: 'glp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterContentInit {
  @ContentChildren(TemplateRef) inputs: QueryList<
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
    return directive ? directive.templateRef :  undefined;
  }
}
