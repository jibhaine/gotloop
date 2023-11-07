import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoizerPageComponent } from './noizer-page.component';
import { ShellModule } from 'src/app/shell/shell.module';

describe('NoizerPageComponent', () => {
  let component: NoizerPageComponent;
  let fixture: ComponentFixture<NoizerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoizerPageComponent ],
      imports: [ShellModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
