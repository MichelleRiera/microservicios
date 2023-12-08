import { AsignarCursoService } from './../../services/asignar-curso.service';
import { Component } from '@angular/core';
import { curso } from 'src/app/domain/curso.model';
import { AutorizarService } from 'src/app/services/autorizar.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-tuscurso',
  templateUrl: './tuscurso.component.html',
  styleUrls: ['./tuscurso.component.scss']
})
export class TuscursoComponent {
  cursos: any[] = [];  
  userId: string | undefined;

  constructor(private cursoService: CursoService, private authService: AutorizarService) { }

  ngOnInit(): void {
    // Obtén el userId del servicio de autenticación
    const user = this.authService.getCurrentUser();
    this.userId = user?.id;

    if (this.userId) {
      this.loadCursos();
    } else {
      console.error('UserId no definido');
    }
  }

  loadCursos() {
    if (this.userId) {
      this.cursoService.getAsignacionesPorUsuario(this.userId).subscribe(
        (data) => {
          console.log('Datos de cursos asignados:', data); // Agrega esta línea
          this.cursos = data;
        },
        (error) => {
          console.error('Error al obtener cursos asignados al usuario', error);
        }
      );
    } else {
      console.error('UserId no definido');
    }
  }
  getCourseName(asignacion: any): string {
    return asignacion.courses && asignacion.courses.length > 0 ? asignacion.courses[0].name : 'N/A';
  }
  
  getCourseDescription(asignacion: any): string {
    return asignacion.courses && asignacion.courses.length > 0 ? asignacion.courses[0].description : 'N/A';
  }
  
  getCourseCategory(asignacion: any): string {
    return asignacion.courses && asignacion.courses.length > 0 ? asignacion.courses[0].category : 'N/A';
  }
  
  
}