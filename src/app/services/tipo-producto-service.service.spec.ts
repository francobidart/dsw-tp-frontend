import { TestBed } from '@angular/core/testing';

import { TipoProductoServiceService } from './tipo-producto-service.service';

describe('TipoProductoServiceService', () => {
  let service: TipoProductoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoProductoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
