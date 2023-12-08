import { TestBed } from '@angular/core/testing';

import { AsignarCursoService } from './asignar-curso.service';

describe('AsignarCursoService', () => {
  let service: AsignarCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignarCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
