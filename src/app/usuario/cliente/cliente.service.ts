import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Cliente } from './cliente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

interface Clientes{
  cliente:Cliente[];
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private serverUrl = 'http://127.0.0.1:5000/';
  private headers = new Headers({'content-type': 'application/json'});
  public cliente : Cliente[];

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]> {
     return this.http.get<Cliente[]>(this.serverUrl + 'listar_clientes');
  }
/*  public getClientes(): Observable<Clientes> {
     return this.http.get<Clientes>(this.serverUrl + 'listar_clientes');
  }*/

  public getCliente(id: number | string) {
    return this.getClientes().pipe(
      // (+) before `id` turns the string into a number
      map(clientes => clientes.find(cliente => cliente.id === +id))
    );
  }

  public agregarCliente (cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.serverUrl + 'agregar_cliente', JSON.stringify(cliente), httpOptions);
  }

}
