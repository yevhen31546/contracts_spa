import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  // Testing service is created successfully
  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  // Getting data from api service
  it('should get data from api', () => {
    const service = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

});
