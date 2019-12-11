import { TestBed } from '@angular/core/testing';

import { CharacterNewServiceService } from './character-new-service.service';

describe('CharacterNewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterNewServiceService = TestBed.get(CharacterNewServiceService);
    expect(service).toBeTruthy();
  });
});
