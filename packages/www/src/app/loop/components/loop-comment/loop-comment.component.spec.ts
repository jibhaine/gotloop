import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopCommentComponent } from './loop-comment.component';

describe('LoopCommentComponent', () => {
  let component: LoopCommentComponent;
  let fixture: ComponentFixture<LoopCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
