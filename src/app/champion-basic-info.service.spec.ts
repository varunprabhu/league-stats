import { TestBed, inject } from '@angular/core/testing';

import { ChampionBasicInfoService } from './champion-basic-info.service';

describe('ChampionBasicInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionBasicInfoService]
    });
  });

  it('should be created', inject([ChampionBasicInfoService], (service: ChampionBasicInfoService) => {
    expect(service).toBeTruthy();
  }));
});
