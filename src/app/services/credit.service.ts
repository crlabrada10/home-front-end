import { Injectable } from '@angular/core';
import { Credit } from '../entity/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
 
  private credit : Credit [] =[

   {
      nombre: "Ingreso Carlos",
      monto: 70000,
      fecha: new Date()
    },  
    {
      nombre: "Ingreso yisel",
      monto: 100000,
      fecha: new Date()
    }]
  constructor() { }

  getcredit(){
    return this.credit
  }
}
