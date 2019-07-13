import { TestBed } from '@angular/core/testing';

import { RequestMethodsService } from './request-methods.service';

describe('RequestMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestMethodsService = TestBed.get(RequestMethodsService);
    expect(service).toBeTruthy();
  });
});
