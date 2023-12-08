import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuscursoComponent } from './tuscurso.component';

describe('TuscursoComponent', () => {
  let component: TuscursoComponent;
  let fixture: ComponentFixture<TuscursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuscursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuscursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
