import { TestBed } from '@angular/core/testing';

import { SearchgifService } from './searchgif.service';

describe('SearchgifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchgifService = TestBed.get(SearchgifService);
    expect(service).toBeTruthy();
  });
});
