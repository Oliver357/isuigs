import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';


import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  title = "Lista de Clientes";
  public clientes : Cliente[];


  constructor(private router: Router, private cliente_service: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  public getClientes(): void {
    this.cliente_service.getClientes().subscribe(data => {
      console.log(data);
      this.clientes = data;
      console.log(this.clientes);
    });
  }
/*
  public getClientes(): void {
    this.cliente_service.getClientes().subscribe(data => {
      console.log(data);
      this.clientes = data.cliente;
      console.log(this.clientes);
    });
  }*/

}
