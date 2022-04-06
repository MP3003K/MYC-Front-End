import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Inicio Service

import { CargarScriptsServiceService} from "./cargar-scripts-service.service";
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormsModule } from '@angular/forms';
import { CuerpoHijoCComponent } from './cuerpo-hijo-c/cuerpo-hijo-c.component';

// Fin Service
@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    CuerpoComponent,
    CuerpoHijoCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CargarScriptsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
