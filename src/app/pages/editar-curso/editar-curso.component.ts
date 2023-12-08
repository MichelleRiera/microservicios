import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { curso } from 'src/app/domain/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent {
  curso: any = {};  // Debes inicializarlo con un objeto vacío o obtenerlo de tu servicio

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el id del curso de los parámetros de la ruta
    this.activatedRoute.params.subscribe(params => {
      const cursoId = params['id'];

      // Luego, puedes obtener los detalles del curso del servicio
      this.cursoService.getCourseById(cursoId).subscribe(
        (curso: any) => {
          this.curso = curso;
        },
        (error: any) => {
          console.error('Error al obtener detalles del curso:', error);
        }
      );
    });
  }

  editarCurso() {
    // Lógica para editar el curso
    this.cursoService.actualizarCurso(this.curso.id, this.curso).subscribe(
      (cursoActualizado: any) => {
        console.log('Curso actualizado con éxito:', cursoActualizado);
       

        // Redirigir a la lista de cursos u otra página después de editar
        this.router.navigate(['/listar-curso']);
      },
      (error: any) => {
        console.error('Error al actualizar el curso:', error);
      }
    );
  }
}