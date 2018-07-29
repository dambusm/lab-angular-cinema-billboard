import { TestBed, inject } from '@angular/core/testing';

import { MoviesInfoService } from './movies-info.service';

describe('MoviesInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesInfoService]
    });
  });

  it('should be created', inject([MoviesInfoService], (service: MoviesInfoService) => {
    expect(service).toBeTruthy();
  }));
});
