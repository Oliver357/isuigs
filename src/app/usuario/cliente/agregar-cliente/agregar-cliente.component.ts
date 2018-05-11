import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Usuario } from '../../usuario';
import { Cliente } from '../cliente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  title = 'AGREGAR CLIENTE';
  public cliente = new Cliente(null,"","","","","","");

  constructor(private router: Router, private clienteService: ClienteService, private location: Location) { }

  ngOnInit() {
  }

  //public agregarCliente():void{
  //  this.clienteService.agregarCliente("agregar_cliente", this.cliente);
  //}

  public agregarCliente(nombre: string, apellido: string, email: string, username: string, password: string, empresa: string):void{
    const cliente1 = new Cliente(null, nombre, apellido, email, username, password, empresa);
    this.clienteService.agregarCliente2(cliente1);
      //.subscribe(cliente => this.cliente.push(Clientes));
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.cliente); }

}
