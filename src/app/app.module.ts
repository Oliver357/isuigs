import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { ProyectoComponent } from './proyecto/proyecto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';

/*
import { ProyectoModule } from './proyecto/proyecto.module';
import { UsuarioModule } from './usuario/usuario.module';*/
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    UsuarioComponent,
    /*EventoComponent,*/
    PaginaNoEncontradaComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /*
    ProyectoModule,
    UsuarioModule,*/
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
