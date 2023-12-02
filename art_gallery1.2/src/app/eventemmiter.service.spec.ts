import { TestBed } from '@angular/core/testing';

import { EventemmiterService } from './eventemmiter.service';

describe('EventemmiterService', () => {
  let service: EventemmiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventemmiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
