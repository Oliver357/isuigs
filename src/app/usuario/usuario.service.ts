import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Usuario } from './usuario';

const SERVER:string = "http://127.0.0.1:5000/";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}
