import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoopPlayerVizComponent } from './loop-player-viz.component';

describe('LoopPlayerVizComponent', () => {
  let component: LoopPlayerVizComponent;
  let fixture: ComponentFixture<LoopPlayerVizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopPlayerVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopPlayerVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
