import { TestBed } from '@angular/core/testing';

import { CombatEventService } from './combat-event.service';

describe('CombatEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CombatEventService = TestBed.get(CombatEventService);
    expect(service).toBeTruthy();
  });
});
