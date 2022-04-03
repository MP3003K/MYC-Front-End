import { Component, OnInit } from '@angular/core';
import { CargarScriptsServiceService } from "././cargar-scripts-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cp001.2';

  constructor( private _CargaScripts: CargarScriptsServiceService){
    _CargaScripts.Carga(["js"]);
  }
}
