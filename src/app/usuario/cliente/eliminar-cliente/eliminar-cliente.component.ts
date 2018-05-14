import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  title = "Lista de Clientes";
  public clientes : Cliente[];

  constructor(private router: Router, private cliente_service: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  public getClientes(): void {
    this.cliente_service.getClientes().subscribe(data => {
      console.log(data);
      this.clientes = data.cliente;
      console.log(this.clientes);
    });
  }

}
