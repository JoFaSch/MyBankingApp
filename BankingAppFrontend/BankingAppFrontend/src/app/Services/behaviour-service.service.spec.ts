import { TestBed } from '@angular/core/testing';

import { BehaviourServiceService } from './behaviour-service.service';

describe('BehaviourServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviourServiceService = TestBed.get(BehaviourServiceService);
    expect(service).toBeTruthy();
  });
});
