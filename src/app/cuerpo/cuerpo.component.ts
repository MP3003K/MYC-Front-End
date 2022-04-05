import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
// * valores
titulo= 'Registro de Usuarios';
mensaje='mensaje';
registrado=false;
nombre:string="";
apellido:string="";
entradas: any;
// *  funciones

registarUsuarios(){
  this.registrado=true;
  this.mensaje="Registrado con exito";
}

constructor() {
  this.entradas=[
    {titulo:"Java cada dia mas presente"},
    {titulo:"Pyton cada dia mas presente"},
    {titulo:"JavaScrip cada dia mas presente"},
    {titulo:"LetGo cada dia mas presente"},
  ]
}

  ngOnInit(): void {
  }

}
