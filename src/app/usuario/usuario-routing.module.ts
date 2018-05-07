import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';

const usuarioRoutes: Routes = [
  { path: 'usuario', component: UsuarioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class UsuarioRoutingModule { }
