import { TestBed } from '@angular/core/testing';

import { CurseServiceService } from './curse-service.service';

describe('CurseServiceService', () => {
  let service: CurseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
