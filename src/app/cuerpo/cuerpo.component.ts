import { Component, OnInit } from '@angular/core';
import { Empleado } from './persona.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  votantes= ['Narco', 'Celeritas', 'Bombasto'];
  Afavor:number=0;
  EnContra:number=0;

  votar(respuesta:boolean){
        if(respuesta){
      this.Afavor++;
    }else{
      this.EnContra++;
    }

  }


  constructor() {

  }
  ngOnInit(): void {
  }

}
