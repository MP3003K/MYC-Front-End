import { TestBed } from '@angular/core/testing';

import { CargarScriptsServiceService } from './cargar-scripts-service.service';

describe('CargarScriptsServiceService', () => {
  let service: CargarScriptsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarScriptsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
