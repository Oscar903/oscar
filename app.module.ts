import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HistorialComponent } from './components/historial/historial.component';

const rutas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'historial', component: HistorialComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PacienteComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
