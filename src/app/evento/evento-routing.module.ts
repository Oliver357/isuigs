import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventoComponent } from './evento.component';

const eventoRoutes: Routes = [
  { path: 'evento', component: EventoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eventoRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class EventoRoutingModule { }
