import { Empleado } from './../cuerpo/persona.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-hijo-c',
  templateUrl: './cuerpo-hijo-c.component.html',
  styleUrls: ['./cuerpo-hijo-c.component.css']
})
export class CuerpoHijoCComponent implements OnInit {
 @Input()empleadoDeLista: Empleado;
 @Input()indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
