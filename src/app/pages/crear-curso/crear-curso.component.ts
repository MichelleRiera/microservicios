import { Component } from '@angular/core';
import { curso } from 'src/app/domain/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent {
  nuevoCurso: any = {};

  constructor(private cursoService: CursoService) {}

  registrarCurso() {
    this.cursoService.saveCurso(this.nuevoCurso).subscribe(
      (data) => {
        console.log('Curso registrado con éxito:', data);
        this.nuevoCurso = {};
      },
      (error) => {
        console.error('Error al registrar el curso:', error);
      }
    );
  }
}