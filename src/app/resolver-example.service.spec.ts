import { TestBed } from '@angular/core/testing';

import { ResolverExampleService } from './resolver-example.service';

describe('ResolverExampleService', () => {
  let service: ResolverExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
