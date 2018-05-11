import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cliente } from './cliente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
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

  public getClientes(): Observable<Clientes> {
     return this.http.get<Clientes>(this.serverUrl + 'listar_clientes');
  }

/*  public getPermits(): Observable<Permits> {
    return this.http.get<Permits>(this.serverUrl + 'permits')
  }*/

}
