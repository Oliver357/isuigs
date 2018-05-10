import { Component, OnInit } from '@angular/core';

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
    $('#cliente').tab('show');
  }
  public activarEmpleado(): void{
    $('#empleado').tab('show');
  }
  public activarEquipo(): void{
    $('#equipo').tab('show');
  }

}
