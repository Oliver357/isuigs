import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProyectoRoutingModule } from './proyecto-routing.module';

import { ProyectoComponent } from './proyecto.component';
import { ProyectoService } from './proyecto.service';
import { EventoProyectoComponent } from './evento/evento-proyecto/evento-proyecto.component';

@NgModule({
  declarations: [
    ProyectoComponent,
    EventoProyectoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProyectoRoutingModule
  ],
  providers: [
    ProyectoService
  ]
})
export class ProyectoModule { }
