
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





//Componentes Login
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service'; //Servicio para verficar que este iniciado sesion

//Componentes del Cliente
import { CreateClienteComponent } from './pages/cliente/create-cliente/create-cliente.component';
import { MantClienteComponent } from './pages/cliente/mant-cliente/mant-cliente.component';






//Componentes Home
import { HomeComponent } from './pages/home/home.component';
import { EditClienteComponent } from './pages/cliente/edit-cliente/edit-cliente.component';


const routes: Routes = [
  //Login
  { path: 'login', component: LoginComponent },
  

  //Cliente
  {path: 'create-cliente',component: CreateClienteComponent},
  {path: 'mant-cliente',component: MantClienteComponent},
  {path: 'edit-cliente',component: EditClienteComponent},

 




  //Home
  {path: 'home',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
