import { Component, Input, OnInit } from '@angular/core';
import { Credit } from 'src/app/entity/credit';

@Component({
  selector: 'app-detalle-ingreso',
  templateUrl: './detalle-ingreso.component.html',
  styleUrls: ['./detalle-ingreso.component.css']
})
export class DetalleIngresoComponent implements OnInit {

  @Input() credit!: Credit;
  constructor() { }

  ngOnInit(): void {
  }

}
