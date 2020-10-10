import { TestBed } from '@angular/core/testing';

import { CatogoriesService } from './catogories.service';

describe('CatogoriesService', () => {
  let service: CatogoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
