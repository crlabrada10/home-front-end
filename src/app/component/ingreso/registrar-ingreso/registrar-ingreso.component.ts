import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePickerComponent, IDayCalendarConfig } from 'ng2-date-picker';
import { iif } from 'rxjs';


@Component({
  selector: 'app-registrar-ingreso',
  templateUrl: './registrar-ingreso.component.html',
  styleUrls: ['./registrar-ingreso.component.css']
})
export class RegistrarIngresoComponent implements OnInit {

 formularioIngreso! : FormGroup
 submitted = false;

 //@ViewChild('dayPicker') datePicker!: DatePickerComponent;  
 //open() { this.datePicker.api.open(); }  
 //close() { this.datePicker.api.close(); }
  
 @ViewChild("dateFromDp") public dateFromDp!: DatePickerComponent; 
 open() { this.dateFromDp.api.open(); }  
 close() { this.dateFromDp.api.close(); }
   public dayPickerConfig = <IDayCalendarConfig>{
    locale: "es",
    format: "DD/MM/YYYY",
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.crearFormulario();

  }

  crearFormulario(){
   this.formularioIngreso = this.formBuilder.group({
     nombre:['', Validators.required],
     monto:['', Validators.required],
     dateFrom: new FormControl().setValidators([Validators.required]),
   });
  }

  onSubmit() : void{
    this.submitted = true;
    if(this.formularioIngreso.valid){
      console.log('this.formularioIngreso.value: ' + this.myForm().dateFrom.value);
      if(this.myForm().dateFrom.value instanceof String){
        console.log('es una fecha');
      }
    } else {
      
      console.log('paso');
       // this.formularioIngreso.
        console.log('no es valido');
    }
    
  }

  limpiar() : void{ 
    this.submitted = false;
    this.formularioIngreso.reset();
  }


  /*get controlFormulario(): { [key: string]: AbstractControl } {
    return this.formularioIngreso.controls;
  }*/
   
  // Getter method to access formcontrols
  myForm() {
    return this.formularioIngreso.controls;
  }

  displayFieldCss(field: string){
    return {'is-invalid':this.isFieldInvalid(field)}
  }

  isFieldInvalid(field: string){
    if(field.length> 0){
      return !this.submitted ? false : !this.formularioIngreso.get(field)?.valid;
    }
    return false;
  }
}
