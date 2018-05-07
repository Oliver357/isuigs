import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const appRoutes: Routes = [
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
