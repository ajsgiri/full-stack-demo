import { TestBed } from '@angular/core/testing';

import { NotableApiService } from './notable-api.service';

describe('NotableApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotableApiService = TestBed.get(NotableApiService);
    expect(service).toBeTruthy();
  });
});
