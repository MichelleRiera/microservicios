import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCursoComponent } from './mantenimiento-curso.component';

describe('MantenimientoCursoComponent', () => {
  let component: MantenimientoCursoComponent;
  let fixture: ComponentFixture<MantenimientoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
