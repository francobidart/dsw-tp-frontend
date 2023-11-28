import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from "../services/user.service";
import {ToastService} from "../services/toast/toast-service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ApiResponse} from "../models/api-response";
import {User} from "../models/user";


@Component({
  selector: 'registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repetirpassword: new FormControl('', Validators.required),
  });

  constructor(private usuarioService: UserService, private toastService: ToastService, private router: Router) {
  }

  Completado: string = '';

  registrarUsuario() {
    if (this.formulario.valid) {
      if (this.formulario.value.password === this.formulario.value.repetirpassword) {
        this.usuarioService.registrarUsuario(this.formulario.value).subscribe({
          next: (res: ApiResponse<User>) => {
            this.toastService.showSuccess(res.mensaje);
            this.router.navigate(['/login']);
          },
          error: (error: any) => {
            this.toastService.showError(error.error.mensaje);
          }
        })
      } else {
        this.Completado = 'Las contraseñas no coinciden';
      }
    } else {
      this.Completado = 'Complete todos los campos correctamente por favor';
    }
  }
}
