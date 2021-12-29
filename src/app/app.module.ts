import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { IngresoComponent } from './component/ingreso/ingreso.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { ListarIngresoComponent } from './component/ingreso/listar-ingreso/listar-ingreso.component';
import { DetalleIngresoComponent } from './component/ingreso/detalle-ingreso/detalle-ingreso.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrarIngresoComponent } from './component/ingreso/registrar-ingreso/registrar-ingreso.component';
import { HomeComponent } from './component/home/home.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { AppNumeroDirective } from './directivas/app-numero.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresoComponent,
    ListarIngresoComponent,
    DetalleIngresoComponent,
    RegistrarIngresoComponent,
    HomeComponent,
    AppNumeroDirective
   
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    DpDatePickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
