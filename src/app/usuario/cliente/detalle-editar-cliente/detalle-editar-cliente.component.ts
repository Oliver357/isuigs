import { Component, OnInit, HostBinding } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import  { Cliente } from "../cliente";
import { ClienteService }  from '../cliente.service';

@Component({
  selector: 'app-detalle-editar-cliente',
  templateUrl: './detalle-editar-cliente.component.html',
  styleUrls: ['./detalle-editar-cliente.component.css']
})
export class DetalleEditarClienteComponent implements OnInit {
  cliente$: Observable<Cliente>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cliente_service: ClienteService
  ) { }

  ngOnInit() {
    this.getCliente();
  }

  public getCliente(): void{
    this.cliente$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cliente_service.getCliente(params.get('id')))
    );
  }

}
