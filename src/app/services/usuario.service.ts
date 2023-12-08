import { Usuario } from 'src/app/domain/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  saveUsuario(usuario: Usuario) {
    return this.http.post<any>("http://localhost:8083/api/users/register", usuario);
  }
  
  

  getAll(){
    return this.http.get<any>("http://localhost:8080/Proyecto-Plataformas/rs/Usuarios/listar")
  }

  eliminar(Usuario: Usuario){
    return this.http.delete<any>("http://localhost:8080/Proyecto-Plataformas/rs/Usuarios/eliminar", { body: Usuario });
  }
  updateUsuario(userId: string, usuario: Usuario): Observable<Usuario> {
    const url = `http://localhost:8083/api/users/${userId}`;
    return this.http.put<Usuario>(url, usuario);
  }
  getUsuarioById(userId: string): Observable<Usuario> {
    const url = `http://localhost:8083/api/users/${userId}`;
    return this.http.get<Usuario>(url);
  }
  

 

}

