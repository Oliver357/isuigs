import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UsuarioComponent } from './usuario.component';

import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
