import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

//Imports Para el Menu de navegacion
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



//Paginas
import { LoginComponent } from './login/login.component';

//Login
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateClienteComponent } from './pages/cliente/create-cliente/create-cliente.component';
import { MantClienteComponent } from './pages/cliente/mant-cliente/mant-cliente.component';

import { HomeComponent } from './pages/home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

//Crear

import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Mantenimiento
import { MatTableModule } from '@angular/material/table';


import { FlexLayoutModule } from '@angular/flex-layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

import { EditClienteComponent } from './pages/cliente/edit-cliente/edit-cliente.component';
import { DatePipe } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker'; // Asegúrate de importar MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core';
import { InicioComponent } from './app/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
     LoginComponent,
     CreateClienteComponent,
     MantClienteComponent,
     HomeComponent,
     CabeceraComponent,
     EditClienteComponent,
     InicioComponent,

     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatMenuModule,MatButtonModule,
    MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,HttpClientModule, MatSnackBarModule,
    ReactiveFormsModule,
    MatTableModule,FlexLayoutModule,MatAutocompleteModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
