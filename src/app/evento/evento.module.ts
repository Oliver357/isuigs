import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { EventoComponent } from './evento.component';

import { EventoRoutingModule } from './evento-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventoRoutingModule
  ],
  declarations: [EventoComponent]
})
export class EventoModule { }
