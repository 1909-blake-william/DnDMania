import { TestBed } from '@angular/core/testing';

import { TestModelService } from './test-model.service';

describe('TestModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestModelService = TestBed.get(TestModelService);
    expect(service).toBeTruthy();
  });
});
