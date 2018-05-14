import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EventoModule } from './evento/evento.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { UsuarioModule } from './usuario/usuario.module';

import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EventoModule,
    ProyectoModule,
    UsuarioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
