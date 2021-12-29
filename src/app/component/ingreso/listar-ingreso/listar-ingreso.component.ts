import { Component, OnInit,  Input, } from '@angular/core';
import {Router} from '@angular/router';
import { Credit } from 'src/app/entity/credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-listar-ingreso',
  templateUrl: './listar-ingreso.component.html',
  styleUrls: ['./listar-ingreso.component.css']
})
export class ListarIngresoComponent implements OnInit {

 
  creditList!: Credit [] ;

  constructor(private _creditService: CreditService, private _router: Router) { }

  ngOnInit(): void {
    this.creditList = this._creditService.getcredit();
  }

  verDetalle(index: number){
    console.log('index: ' + index);
    this._router.navigate(['ingreso', index]);
  }
}
