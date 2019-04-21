import { PartDirective } from './part.directive';
import { TemplateRef, Component, ViewChild } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: `
    <ng-template #template glpPart="header"></ng-template>
  `,
})
class PartDirectiveTestComponent {
  @ViewChild('template')
  public template: TemplateRef<any>;
  @ViewChild('template', { read: PartDirective })
  public directive: PartDirective;
}
describe('PartDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartDirective, PartDirectiveTestComponent],
    }).compileComponents();
  }));

  let component: PartDirectiveTestComponent;
  let fixture: ComponentFixture<PartDirectiveTestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create an instance programattically', () => {
    const directive = new PartDirective(component.template);
    expect(directive).toBeTruthy();
  });
  it('should create an instance on component', () => {
    expect(component.directive).toBeTruthy();
  });
  it('should store its input as "part" attribute', () => {
    expect(component.directive.part).toBeTruthy();
    expect(component.directive.part).toBe('header');
  });
});
