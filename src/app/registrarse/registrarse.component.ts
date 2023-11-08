import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', Validators.required),
      repetirContraseña: new FormControl('', Validators.required),
    });
  }

  validarFormulario() {
    if (this.formulario.valid) {
      if (this.formulario.value.contraseña === this.formulario.value.repetirContraseña) {
        
        console.log('Formulario válido y contraseñas coinciden');
      } else {
        console.log('Las contraseñas no coinciden');
      }
    } else {
      console.log('Por favor, complete todos los campos', this.formulario.value.email);
      
    }
  }
  telfono(arg0: string, telfono: any) {
    throw new Error('Method not implemented.');
  }





}
