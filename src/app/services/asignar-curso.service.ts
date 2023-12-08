import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignarCursoService {

  constructor(private http: HttpClient) { }

  // ... otros métodos ...

  asignarCurso(userId: string, courseId: string): Observable<any> {
    const url = `http://localhost:8083/api/assignments`;
    const body = { userId, courseId };

    return this.http.post<any>(url, body);
  }
}
