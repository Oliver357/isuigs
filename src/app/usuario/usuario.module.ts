import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';

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

import { ClienteService } from './cliente/cliente.service';
import { EmpleadoService } from './empleado/empleado.service';
import { EquipoService } from './equipo/equipo.service';
import { EventoUsuarioComponent } from './evento/evento-usuario/evento-usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    AgregarClienteComponent,
    ListarClientesComponent,
    EliminarClienteComponent,
    AgregarEmpleadoComponent,
    EliminarEmpleadoComponent,
    ListarEmpleadosComponent,
    ListarEquiposComponent,
    EliminarEquipoComponent,
    CrearEquipoComponent,
    EventoUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  providers: [
    ClienteService,
    EmpleadoService,
    EquipoService
  ]
})
export class UsuarioModule { }
