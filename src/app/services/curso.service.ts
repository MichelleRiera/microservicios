import { Observable } from 'rxjs';
import { curso } from './../domain/curso.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  constructor(private http: HttpClient) { }

  saveCurso(curso: curso): Observable<any> {
    return this.http.post<any>("http://localhost:8083/api/courses", curso);
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post<any>("http://localhost:8083/api/users/register", usuario);
  }

  getAllCursos(): Observable<any> {
    return this.http.get<any>("http://localhost:8083/api/courses/all");
  }

  getAsignacionesPorUsuario(userId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8083/api/assignments/byUser/${userId}`);
  }

  asignarCurso(userId: string, courseId: string): Observable<any> {
    const url = "http://localhost:8083/api/assignments";
    const body = { userId, courseId };
    return this.http.post<any>(url, body);
  }

  actualizarCurso(id: string, curso: curso): Observable<curso> {
    const url = `http://localhost:8083/api/courses/${id}`;
    return this.http.put<curso>(url, curso);
  }

  eliminarCurso(id: string): Observable<any> {
    const url = `http://localhost:8083/api/courses/${id}`;
    return this.http.delete(url);
  }
  getCourseById(id: string): Observable<curso> {
    const url = `http://localhost:8083/api/courses/${id}`;
    return this.http.get<curso>(url);
  }
}
