import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public activarCliente(): void{
    $("#e-usuario").removeClass("active");
    $("#empleado").removeClass("active");
    $("#equipo").removeClass("active");
    $("#cliente").removeClass("active").addClass("active");
  }
  public activarEmpleado(): void{
    $("#e-usuario").removeClass("active");
    $("#cliente").removeClass("active")
    $("#equipo").removeClass("active");
    $("#empleado").removeClass("active").addClass("active");;
  }
  public activarEquipo(): void{
    $("#e-usuario").removeClass("active");
    $("#cliente").removeClass("active");
    $("#empleado").removeClass("active");
    $("#equipo").removeClass("active").addClass("active");
  }

}
