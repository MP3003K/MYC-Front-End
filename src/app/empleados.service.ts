import { Injectable } from '@angular/core';
import { Empleado } from './cuerpo/persona.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Maria","Perez","Alcalde",3500)
  ];

  agregarEmpreadoServicio(empleado: Empleado){
    this.empleados.push(empleado);
  }

  constructor() { }
}
