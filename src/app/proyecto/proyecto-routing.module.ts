import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoComponent } from './proyecto.component';

const proyectoRoutes: Routes = [
  { path: 'proyecto', component: ProyectoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(proyectoRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ProyectoRoutingModule { }
