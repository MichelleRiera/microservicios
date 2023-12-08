import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutorizarService } from '../services/autorizar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true; // Para el botón de ocultar/mostrar contraseña
  model: any = {};

  constructor(
    private router: Router,
    private authenticationService: AutorizarService
  ) {
    // redirige a la página de inicio si ya está conectado
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['home']);
    }
  }

  onSubmit() {
    console.log('Datos del formulario:', this.model);
    this.authenticationService.login(this.model.username, this.model.password)
  .subscribe(
    data => {
      console.log('Respuesta del servidor completa:', data);
  
      // Verificar si la respuesta contiene la información esperada
      if (data && data.id) {
        // Redirigir solo si la respuesta es válida
        this.router.navigate(['/home']);
      } else {
        console.error('La respuesta del servidor no contiene la información esperada.');
      }
    },
    error => {
      // Aquí se manejará el error.
      console.error('Error de inicio de sesión:', error);
      this.authenticationService.logout();
    }
  );
 }
 onRegisterClick() {
  // Redirigir a la ruta 'create-cliente'
  this.router.navigate(['/create-cliente']);
}
  


}
