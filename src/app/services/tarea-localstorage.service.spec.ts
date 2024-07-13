import { TestBed } from '@angular/core/testing';

import { TareaLocalstorageService } from './tarea-localstorage.service';

describe('TareaLocalstorageService', () => {
  let service: TareaLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
