import { Component } from '@angular/core';
import { AutorizarService } from '../services/autorizar.service';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  cursos: any[] = [];
  isAdmin: boolean = false;
  isGeneral: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AutorizarService,
    private cursoService: CursoService
  ) {}

  ngOnInit() {
    // Al cargar la página, obtén todos los cursos
   
  }

  

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  irACategoria(category: string) {
    // Agrega lógica para navegar a la categoría seleccionada
    // Por ejemplo, puedes navegar a una página que muestre los cursos de esa categoría
    console.log(`Ir a la categoría: ${category}`);
  }
}