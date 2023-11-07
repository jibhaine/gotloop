import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoopsLoaderComponent } from './loops-loader.component';

describe('LoopsLoaderComponent', () => {
  let component: LoopsLoaderComponent;
  let fixture: ComponentFixture<LoopsLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopsLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
