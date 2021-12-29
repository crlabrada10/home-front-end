import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetalleIngresoComponent } from './component/ingreso/detalle-ingreso/detalle-ingreso.component';
import { IngresoComponent } from './component/ingreso/ingreso.component';
import { RegistrarIngresoComponent } from './component/ingreso/registrar-ingreso/registrar-ingreso.component';


const routes: Routes = [
  {path:"**", component :RegistrarIngresoComponent},
  {path:"ingreso", component :IngresoComponent},
  {path:"ingreso/registrar", component:RegistrarIngresoComponent},
  {path:"ingreso/:id", component:DetalleIngresoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
