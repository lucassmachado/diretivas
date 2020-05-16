import { TestBed } from '@angular/core/testing';

import { NgifService } from './ngif.service';

describe('NgifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgifService = TestBed.get(NgifService);
    expect(service).toBeTruthy();
  });
});
