import { TestBed } from '@angular/core/testing';

import { LoopService } from './loop.service';

describe('LoopService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } }),
  );

  it('should be created', () => {
    const service: LoopService = TestBed.get(LoopService);
    expect(service).toBeTruthy();
  });
});
