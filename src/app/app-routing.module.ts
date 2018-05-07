import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoComponent } from './proyecto/proyecto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';

import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const appRoutes: Routes = [
/*  {
    path: 'proyecto',
    loadChildren: 'app/proyecto/proyecto.module#ProyectoModule'
  },
  {
    path: 'usuario',
    loadChildren: 'app/usuario/usuario.module#UsuarioModule'
  },*/

  { path: 'evento', component: EventoComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '', redirectTo: '/evento', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(
    appRoutes,
    {
      enableTracing: true
    }
  ) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
