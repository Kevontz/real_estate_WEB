import { TestBed } from '@angular/core/testing';

import { AreaClienteService } from './area-cliente.service';

describe('AreaClienteService', () => {
  let service: AreaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
