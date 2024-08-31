import { TestBed } from '@angular/core/testing';

import { FlipkartpgsvcService } from './flipkartpgsvc.service';

describe('FlipkartpgsvcService', () => {
  let service: FlipkartpgsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartpgsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
