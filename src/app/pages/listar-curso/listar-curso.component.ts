import { Component } from '@angular/core';
import { curso } from 'src/app/domain/curso.model';
import { AsignarCursoService } from 'src/app/services/asignar-curso.service';
import { AutorizarService } from 'src/app/services/autorizar.service';
import { CursoService } from 'src/app/services/curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.scss']
})
export class ListarCursoComponent {
  curso: curso[] = [];
  courseId: string | undefined;
  userId: string | undefined;
  

  constructor(
    private cursoService: CursoService,
    private AsignarCursoService: AsignarCursoService,
    private authService: AutorizarService,
    private snackBar: MatSnackBar
  ) {
    
    this.userId = JSON.parse(localStorage.getItem('currentUser') || '{}').id;
  }

  ngOnInit(): void {
    this.loadCursos();
    this.userId = JSON.parse(localStorage.getItem('currentUser') || '{}').id;
  }

  loadCursos() {
    this.cursoService.getAllCursos().subscribe(
      (data) => {
        this.curso = data;
      },
      (error) => {
        console.error('Error al obtener cursos', error);
      }
    );
  }

  asignarCurso(userId: string | undefined, courseId: string | undefined) {
    console.log('Usuario autenticado:', userId);
    console.log('courseId:', courseId); // <-- Utiliza el parámetro courseId aquí

    if (userId && courseId) {
      const userIdString = String(userId);
      this.AsignarCursoService.asignarCurso(userIdString, courseId).subscribe(
        (data) => {
          this.snackBar.open('Curso Asignado con exito', 'ok', {
            duration: 3000, 
          });
          console.log('Curso asignado con éxito:', data);
        },
        (error) => {
          console.error('Error al asignar el curso:', error);
        }
      );
    } else {
      console.error('Usuario no autenticado o courseId indefinido');
    }
  }
}