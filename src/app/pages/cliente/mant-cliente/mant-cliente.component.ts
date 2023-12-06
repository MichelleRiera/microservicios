import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-mant-cliente',
  templateUrl: './mant-cliente.component.html',
  styleUrls: ['./mant-cliente.component.scss']
})
export class MantClienteComponent implements OnInit{
  listadoPersonas: Persona[] | undefined;
   listadoPersonasWS: any;

  displayedColumns: string[] = ['id','username', 'password'];


  constructor(private _snackBar: MatSnackBar,private router: Router, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getAll().subscribe(
      (response) => {
        // Filtrar las personas por tipo "C" (clientes)
        this.listadoPersonasWS = response.filter((persona: Persona) => persona.username === 'C');
        console.log('Listado de personas (Clientes):', this.listadoPersonasWS);
      },
      (error) => {
        console.error('Error al obtener la lista de personas:', error);
      }
    );
  }
  


  eliminar(persona: Persona) {
    this.personaService.eliminar(persona).subscribe(
      response => {

          this._snackBar.open(` ${response.mensaje}`, 'Cerrar', {
            duration: 5000,
          });
          this.getPersonas();  // refrescar la lista después de la eliminación


      },
      error => {
        this._snackBar.open(` ${error.error.mensaje}`, 'Cerrar', {
          duration: 5000,
        });
      }
    )
  }

  editar(persona: Persona) {

    this.router.navigate(['edit-cliente']);
  }
}

