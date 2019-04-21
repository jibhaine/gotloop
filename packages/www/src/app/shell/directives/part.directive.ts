import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[glpPart], [part]',
  exportAs: 'part',
})
export class PartDirective {
  @Input('glpPart')
  public part: 'header' | 'middle' | 'footer';

  constructor(public templateRef: TemplateRef<any>) {}
}
