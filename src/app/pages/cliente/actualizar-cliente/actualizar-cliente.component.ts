import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.scss']
})
export class ActualizarClienteComponent {
  id: string = '';
  usuario: Usuario = { username: '', password: '' };
  nuevaPassword: string = '';
  confirmarPassword: string = '';
  contrasenasCoinciden: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la ruta

      this.usuario = JSON.parse(localStorage.getItem('currentUser') || '{}');

  }


  validarContrasenas() {
    this.contrasenasCoinciden = this.nuevaPassword === this.confirmarPassword;
  }

  actualizarUsuario() {
    if (this.usuario.id && this.contrasenasCoinciden) {
      const usuarioActualizado: Usuario = {
        id:this.usuario.id,
        username: this.usuario.username, 
        password: this.nuevaPassword
      };
  
      this.usuarioService.updateUsuario(this.usuario.id, usuarioActualizado).subscribe(
        data => {
          this.snackBar.open('Usuario actualizado correctamente:', 'ok', {
            duration: 3000, 
          });
          console.log('Usuario actualizado correctamente:', data);
        },
        error => {
          console.error('Error al actualizar usuario:', error);
        }
      );
    } else {
      this.snackBar.open('Las contraseñas no coinciden o el ID no es válido.', 'ok', {
        duration: 3000, 
      });
      console.error('Las contraseñas no coinciden o el ID no es válido.');
    }
  }
  
}