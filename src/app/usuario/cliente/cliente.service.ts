import { Injectable } from '@angular/core';

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

const SERVER:string = "http://127.0.0.1:5000/";

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

  public agregarCliente (cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.serverUrl + 'agregar_cliente', JSON.stringify(cliente), {headers: new HttpHeaders().set('Content-Type','application/json')});
  }

  public agregarCliente2(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.serverUrl + 'agregar_cliente', JSON.stringify(cliente), httpOptions);
  }

/*  public agregarCliente(path: string, cliente:Cliente):void{
    this.http.post(SERVER + path, JSON.stringify(cliente), {headers: new HttpHeaders().set('Content-Type','application/json')})
             .subscribe(data => {},
                        (err: HttpErrorResponse) => {
                          if (err.error instanceof Error) {
                            alert('An error occurred:'+ err.error.message);
                          }
                          else {
                            alert(`Backend returned code ${err.status}, body was: ${err.error}`);
                          }
                        });
  }*/

}
