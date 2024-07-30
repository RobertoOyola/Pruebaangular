import { TestBed } from '@angular/core/testing';

import { LibreriaServicesService } from './libreria-services.service';

describe('LibreriaServicesService', () => {
  let service: LibreriaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
