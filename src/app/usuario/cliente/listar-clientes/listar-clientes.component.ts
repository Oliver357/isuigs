import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  title = "Lista de Clientes";
  public clientes: Observable<Cliente[]>;

  public cliente$: Cliente[];
  private selectedId: number;

  public clienteSeleccionado: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cliente_service: ClienteService
  ) {}

  ngOnInit() {
    this.getClientesFinal();
    //console.log(this.clientes);
    //this.getClientesFinal();
    //console.log(this.clientes);

    //let id = this.route.snapshot.paramMap.get('id');
    //this.cliente$ = this.cliente_service.getCliente(id);
  /*this.clientes = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.cliente_service.getCliente(params.get('id')))
  );*/
    //this.getClientes();
  }

  public getClientesFinal(){
    this.clientes = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');
      return this.cliente_service.getClientes();
      })
    );
  }

  public getClientes(): void {
    this.cliente_service.getClientes().subscribe(data => {
      //console.log(data);
      this.cliente$ = data;
      //console.log(this.cliente$);
    });
  }

/*  public getClientes(): void {
    this.cliente_service.getClientes().subscribe(data => {
      console.log(data);
      this.clientes = data.cliente;
      console.log(this.clientes);
    });
  }*/

}
