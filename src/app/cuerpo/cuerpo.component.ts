import { EmpleadosService } from './../empleados.service';
import { Component, OnInit } from '@angular/core';
import { ServicioBaseService } from '../servicio-base.service';
import { Empleado } from './persona.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {



  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpreadoServicio(miEmpleado);
  }


  constructor(private empleadoService: EmpleadosService) {
    this.empleados=this.empleadoService.empleados;
  }
  ngOnInit(): void {
  }

}
