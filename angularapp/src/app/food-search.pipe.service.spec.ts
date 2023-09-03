import { TestBed } from '@angular/core/testing';

import { FoodSearch.PipeService } from './food-search.pipe.service';

describe('FoodSearch.PipeService', () => {
  let service: FoodSearch.PipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodSearch.PipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});