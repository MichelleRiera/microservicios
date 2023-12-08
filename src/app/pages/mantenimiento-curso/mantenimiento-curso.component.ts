import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-mantenimiento-curso',
  templateUrl: './mantenimiento-curso.component.html',
  styleUrls: ['./mantenimiento-curso.component.scss']
})
export class MantenimientoCursoComponent {
  cursos: any[] = [];

  constructor(private cursoService: CursoService, private router: Router)
   {}

  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos() {
    this.cursoService.getAllCursos().subscribe(
      (data) => {
        this.cursos = data;
      },
      (error) => {
        console.error('Error al obtener cursos:', error);
      }
    );
  }
  editarCurso(curso: any) {
    // Redirigir a la página de edición con el ID del curso
    this.router.navigate(['/edit-curso', curso.id]);
  }
  

  eliminarCurso(cursoId: string) {
    this.cursoService.eliminarCurso(cursoId).subscribe(
      () => {
        console.log('Curso eliminado con éxito.');
        // Actualizar la lista después de eliminar
        this.obtenerCursos();
      },
      (error) => {
        console.error('Error al eliminar el curso:', error);
      }
    );
  }
}
