import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

// * valores
habilitarCuadro= false;
color="amarillo";

// *  funciones
cargarNombre(nombre:String){
}
habilitarCheck(event: Event){
if((<HTMLInputElement>event.target).value=="si"){
  this.habilitarCuadro=true;
}else{
this.habilitarCuadro=false;
}
}

escribrirColor(event:Event){
this.color=(<HTMLInputElement>event.target).value;
}

AlertCheck(){
  alert( " Alerta prueba");
}
constructor() { }

  ngOnInit(): void {
  }

}
