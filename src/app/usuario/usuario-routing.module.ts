import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { AgregarEmpleadoComponent } from './empleado/agregar-empleado/agregar-empleado.component';
import { EliminarEmpleadoComponent } from './empleado/eliminar-empleado/eliminar-empleado.component';
import { ListarEmpleadosComponent } from './empleado/listar-empleados/listar-empleados.component';
import { ListarEquiposComponent } from './equipo/listar-equipos/listar-equipos.component';
import { EliminarEquipoComponent } from './equipo/eliminar-equipo/eliminar-equipo.component';
import { CrearEquipoComponent } from './equipo/crear-equipo/crear-equipo.component';

const usuarioRoutes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'listar-clientes',
        component: ListarClientesComponent,
      },
      {
        path: 'agregar-cliente',
        component: AgregarClienteComponent,
      },
      {
        path: 'eliminar-cliente',
        component: EliminarClienteComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class UsuarioRoutingModule { }
