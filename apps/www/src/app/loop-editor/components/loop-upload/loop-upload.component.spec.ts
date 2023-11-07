import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoopUploadComponent } from './loop-upload.component';

describe('LoopUploadComponent', () => {
  let component: LoopUploadComponent;
  let fixture: ComponentFixture<LoopUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
