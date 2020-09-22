import { TestBed } from '@angular/core/testing';

import { InfosPersoService } from './infos-perso.service';

describe('InfosPersoService', () => {
  let service: InfosPersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosPersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
