import { Empleado } from './../cuerpo/persona.model';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cuerpo-hijo-c',
  templateUrl: './cuerpo-hijo-c.component.html',
  styleUrls: ['./cuerpo-hijo-c.component.css']
})
export class CuerpoHijoCComponent implements OnInit {
 @Input()Hvotante='';
@Output() Hvotar = new EventEmitter<boolean>();


voto:boolean;

votar(res:boolean){
this.voto=true;
this.Hvotar.emit(res);
}
  constructor() { }

  ngOnInit(): void {
  }

}
