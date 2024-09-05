import { TestBed } from '@angular/core/testing';

import { AmazonserviceService } from './amazonservice.service';

describe('AmazonserviceService', () => {
  let service: AmazonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
