import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la ruta
    this.route.params.subscribe(params => {
      this.id = params['id'];
      // Cargar datos del usuario al inicializar el componente
      this.loadUsuarioData();
    });
  }

  loadUsuarioData() {
    if (this.id) {
      this.usuarioService.getUsuarioById(this.id).subscribe(
        data => {
          this.usuario = data;
        },
        error => {
          console.error('Error al cargar datos del usuario:', error);
        }
      );
    }
  }

  validarContrasenas() {
    this.contrasenasCoinciden = this.nuevaPassword === this.confirmarPassword;
  }

  actualizarUsuario() {
    if (this.id && this.contrasenasCoinciden) {
      const usuarioActualizado: Usuario = {
        username: this.usuario.username,  // Puedes actualizar otras propiedades según sea necesario
        password: this.nuevaPassword
      };
  
      this.usuarioService.updateUsuario(this.id, usuarioActualizado).subscribe(
        data => {
          console.log('Usuario actualizado correctamente:', data);
        },
        error => {
          console.error('Error al actualizar usuario:', error);
        }
      );
    } else {
      console.error('Las contraseñas no coinciden o el ID no es válido.');
    }
  }
  
}