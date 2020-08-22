import { TestBed } from '@angular/core/testing';

import { ShipmentService } from './shipment.service';

describe('ShipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipmentService = TestBed.get(ShipmentService);
    expect(service).toBeTruthy();
  });
});
