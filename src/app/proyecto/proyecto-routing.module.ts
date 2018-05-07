import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoComponent } from './proyecto.component';

const proyectoRoutes: Routes = [
  /*{
    path: '',
    redirectTo: '/evento',
    component: ProyectoComponent,
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forChild(proyectoRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ProyectoRoutingModule { }
