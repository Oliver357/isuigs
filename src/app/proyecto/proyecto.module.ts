import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProyectoRoutingModule } from './proyecto-routing.module';

import { ProyectoComponent } from './proyecto.component';

@NgModule({
  declarations: [
    ProyectoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProyectoRoutingModule
  ],
  providers: []
})
export class ProyectoModule { }
