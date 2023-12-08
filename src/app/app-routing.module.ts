
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





//Componentes Login
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service'; //Servicio para verficar que este iniciado sesion

//Componentes del Cliente
import { CreateClienteComponent } from './pages/cliente/create-cliente/create-cliente.component';






//Componentes Home
import { HomeComponent } from './pages/home/home.component';
import { ListarCursoComponent } from './pages/listar-curso/listar-curso.component';
import { TuscursoComponent } from './pages/tuscurso/tuscurso.component';
import { ActualizarClienteComponent } from './pages/cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearCursoComponent } from './pages/crear-curso/crear-curso.component';
import { MantenimientoCursoComponent } from './pages/mantenimiento-curso/mantenimiento-curso.component';
import { EditarCursoComponent } from './pages/editar-curso/editar-curso.component';


const routes: Routes = [
  //Login
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  
  

  //Cliente
  {path: 'create-cliente',component: CreateClienteComponent},
  { path: 'actualizar-usuario/:id', component: ActualizarClienteComponent },


//curso
{path: 'listar-curso',component: ListarCursoComponent,canActivate: [AuthGuardService]},
{path: 'usuario-curso',component: TuscursoComponent,canActivate: [AuthGuardService]},
{path: 'crear-curso',component: CrearCursoComponent,canActivate: [AuthGuardService]},
{path: 'mant-curso',component: MantenimientoCursoComponent,canActivate: [AuthGuardService]},
{ path: 'edit-curso/:id', component: EditarCursoComponent, canActivate: [AuthGuardService] },

  //Home
  {path: 'home',component: HomeComponent,canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
