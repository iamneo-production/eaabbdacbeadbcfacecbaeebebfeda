import { TestBed } from '@angular/core/testing';

import { FoodSearchPipeService } from './food-search.pipe.service';

describe('FoodSearchPipeService', () => {
  let service: FoodSearchPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodSearchPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
