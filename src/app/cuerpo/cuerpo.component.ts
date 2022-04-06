import { Component, OnInit } from '@angular/core';
import { Empleado } from './persona.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  empleados: Empleado[]=[
    new Empleado("Juan", "Diaz","presidente",7500),
    new Empleado("Juan", "Diaz","presidente",7500),
    new Empleado("Juan", "Diaz","presidente",7500),
  ];

  cuadroNombre: string="";
  cuadroApellido: string="";
  cuadroCargo: string="";
  cuadroSalario: number=0;

agregarEmpleado(){
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  this.empleados.push(miEmpleado);
}
  constructor() {

  }
  ngOnInit(): void {
  }

}
