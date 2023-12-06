import { Component, OnInit,Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit {

  @Input() persona: Persona = {id: 0, username: '',password: ''};

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router
    , private personaService: PersonaService
  ) { }

  ngOnInit() {
    
  }

  onSubmit(registerForm: { valid: any; }) {
    if (!registerForm.valid) {
      console.log('Formulario no válido');
      return;
    }

    this.personaService.actualizar(this.persona).subscribe(
      response => {
        if (response.codigo) { // si response.codigo existe, hay un error
          this._snackBar.open(`Error al actualizar cliente: ${response.mensaje}`, 'Cerrar', {
            duration: 2000,
          });
        } else {
          this._snackBar.open('Cliente actualizado con éxito', 'Cerrar', {
            duration: 2000,
          });
          this.persona = { username: '',password: ''};
          this.router.navigate(['mant-cliente']);
        }
      },
      error => {
        this._snackBar.open(` ${error.error.mensaje}`, 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }
}

