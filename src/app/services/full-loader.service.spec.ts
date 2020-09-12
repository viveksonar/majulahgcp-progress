import { TestBed } from '@angular/core/testing';

import { FullLoaderService } from './full-loader.service';

describe('FullLoaderService', () => {
  let service: FullLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
