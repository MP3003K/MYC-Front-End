import { Empleado } from './../cuerpo/persona.model';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-cuerpo-hijo-c',
  templateUrl: './cuerpo-hijo-c.component.html',
  styleUrls: ['./cuerpo-hijo-c.component.css']
})
export class CuerpoHijoCComponent implements OnInit {

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpreadoServicio(miEmpleado);
  }


  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
  }

}
