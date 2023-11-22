import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from "../services/user.service";
import {ToastService} from "../services/toast/toast-service";
import {Router} from "@angular/router";


@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  http: any;

  ngOnInit(): void {
  }

  formulario: FormGroup;

  constructor(private usuarioService: UserService, private toastService: ToastService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repetirpassword: new FormControl('', Validators.required),
      
    });
  }

  Completado: string = '';


  registrarUsuario() {
    if (this.formulario.valid) {
      if (this.formulario.value.password === this.formulario.value.repetirpassword) {
        this.usuarioService.registrarUsuario(this.formulario.value).subscribe((res: any) => {
          this.toastService.showSuccess(res.mensaje);
          this.router.navigate(['/login']);
          
          
        }, (error: any) => {
          this.toastService.showError(error.error.mensaje);
        })
    
        
        ;
      } else {
        this.Completado =  'Las contraseñas no coinciden'
        ;
      }
    } else {
      this.Completado = 'Complete todos los campos correctamente por favor';
    }
  }
}
