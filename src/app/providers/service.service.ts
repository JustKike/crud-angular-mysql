import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Modelo/Persona';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API: string = 'http://localhost/FrontendIII/personas/'; //api de php crud (API)

  constructor(private clienteHttp: HttpClient) { }

  addPersona(datosPersona: Persona): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosPersona);
  }

  getAll() {
    return this.clienteHttp.get(this.API);
  }

  delPersona(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }

  getPersona(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultar=" + id);
  }

  editPersona(id: any, datosPersona: any): Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosPersona)
  }

}
