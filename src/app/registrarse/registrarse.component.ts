
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterserviceService } from '../services/registerservice.service';


@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  http: any;
 
  ngOnInit(): void {
    this.registrarseSer.registrarUsuario(() => {
   if (this.Completado === 1) {
    this.formulario
   }
    });
  }

  formulario: FormGroup;

  constructor(public registrarseSer : RegisterserviceService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', Validators.required),
      repetirContraseña: new FormControl('', Validators.required),
    });
  }

   Completado:number= 0;
  validarFormulario() {
    if (this.formulario.valid) {
      if (this.formulario.value.contraseña === this.formulario.value.repetirContraseña) {
        
         this.Completado = 1;
      } else {
        this.Completado = 2;
      }
    } else {
      this.Completado = 3;
      
    }




  }}
