import { TestBed } from '@angular/core/testing';

import { CrudservisesService } from './crudservises.service';

describe('CrudservisesService', () => {
  let service: CrudservisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudservisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
