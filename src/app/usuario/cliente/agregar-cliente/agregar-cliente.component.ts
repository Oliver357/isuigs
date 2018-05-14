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
  public cliente;

  constructor(private router: Router, private cliente_service: ClienteService, private location: Location) { }

  ngOnInit() {
  }

  //public agregarCliente():void{
  //  this.clienteService.agregarCliente("agregar_cliente", this.cliente);
  //}

  public agregarCliente(nombre: string, apellido: string, email: string, username: string, password: string, empresa: string):void{
    nombre = nombre.trim();
    apellido = apellido.trim();
    email = email.trim();
    username = username.trim();
    password = password.trim();
    empresa = empresa.trim();

    const newCliente: Cliente = { nombre, apellido, email, username, password, empresa } as Cliente;
    this.cliente_service.agregarCliente(newCliente).subscribe();

  //  this.cliente = new Cliente(null, nombre, apellido, email, username, password, empresa);
  //  this.cliente_service.agregarCliente(this.cliente);
      //.subscribe(cliente => this.cliente.push(Clientes));
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.cliente); }

}
