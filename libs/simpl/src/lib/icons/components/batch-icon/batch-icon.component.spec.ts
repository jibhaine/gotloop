import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchIconComponent } from './batch-icon.component';

describe('BatchIconComponent', () => {
  let component: BatchIconComponent;
  let fixture: ComponentFixture<BatchIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
