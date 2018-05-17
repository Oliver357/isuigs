import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UsuarioComponent } from './usuario.component';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { EUsuarioComponent } from './e-usuario/e-usuario.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { DetalleEditarClienteComponent } from './cliente/detalle-editar-cliente/detalle-editar-cliente.component';
import { DetalleEliminarClienteComponent } from './cliente/detalle-eliminar-cliente/detalle-eliminar-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  declarations: [
    UsuarioComponent,
    EUsuarioComponent,
    ListarClientesComponent,
    AgregarClienteComponent,
    EliminarClienteComponent,
    DetalleEditarClienteComponent,
    DetalleEliminarClienteComponent
  ]
})
export class UsuarioModule { }
