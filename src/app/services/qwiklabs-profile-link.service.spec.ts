import { TestBed } from '@angular/core/testing';

import { QwiklabsProfileLinkService } from './qwiklabs-profile-link.service';

describe('QwiklabsProfileLinkService', () => {
  let service: QwiklabsProfileLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QwiklabsProfileLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
