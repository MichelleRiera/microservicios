import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,of} from 'rxjs';
import { Usuario } from '../domain/usuario.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AutorizarService {
  private currentUserSubject: BehaviorSubject<Usuario | null>;

  public currentUser: Observable<Usuario | null>;


  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }


   public get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8083/api/auth/login', { username, password })
      .pipe(
        map(response => {
          console.log('Respuesta del servidor completa:', response);
  
          // Verificar si la respuesta contiene la información esperada
          if (response && response.id) {
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.currentUserSubject.next(response);
            return response;
          } else {
            console.error('La respuesta del servidor no contiene la información esperada.');
            throw new Error('La respuesta del servidor no contiene la información esperada.');
          }
        }),
        catchError(error => {
          // Capturando errores HTTP
          this.logout();
          if (error.status === 401) {
            this.snackBar.open('Error al iniciar sesión: Credenciales de inicio de sesión inválidas.', 'Cerrar', { duration: 5000 });
          } else {
            this.snackBar.open('Ocurrió un error inesperado. Por favor, inténtelo de nuevo.', 'Cerrar', { duration: 5000 });
          }
          // En este caso, dado que estamos manejando el error, necesitamos retornar un observable que complete,
          // en lugar de lanzar un error. Podemos hacer esto con of(null).
          return of(null);
        })
      );
  }
  
  

  logout() {
    // Elimina al usuario del almacenamiento local para cerrar la sesión
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  getCurrentUser(): Usuario | null {
    return this.currentUserSubject.value;
  }

}
