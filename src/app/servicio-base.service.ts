import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioBaseService {

  constructor() { }
  muestraMensaje(mensaje:string){
alert(mensaje);
  }
}
