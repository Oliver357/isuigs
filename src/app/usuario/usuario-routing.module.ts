import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { EUsuarioComponent } from './e-usuario/e-usuario.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';

const usuarioRoutes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
        path: 'listar-clientes',
        component: ListarClientesComponent
      },
      {
        path: 'agregar-cliente',
        component: AgregarClienteComponent
      },
      {
        path: 'eliminar-cliente',
        component: EliminarClienteComponent
      },
      {
        path: '',
        component: EUsuarioComponent
      }
    ]
  }
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
