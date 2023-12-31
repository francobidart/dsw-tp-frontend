import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast/toast-service";
import {UserService} from "../../services/user.service";
import {ApiResponse} from "../../models/api-response";
import {User} from "../../models/user";

@Component({
  selector: 'app-admin-usuarios-nuevo',
  templateUrl: './admin-usuarios-nuevo.component.html',
  styleUrls: ['./admin-usuarios-nuevo.component.css']
})
export class AdminUsuariosNuevoComponent {

  constructor(public activeModal: NgbActiveModal, private toastService: ToastService, private userService: UserService) {
  }

  FormUsuario = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    apellido: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    telefono: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    isAdmin: new FormControl(0, [
      Validators.required
    ])
  })

  registrarUsuario() {
    if (this.FormUsuario.valid) {
      this.userService.registrarUsuarioAdm(this.FormUsuario.value).subscribe({
        next: (res: ApiResponse<User>) => {
          this.toastService.showSuccess(res.mensaje);
          this.activeModal.close('registrado');
        },
        error: (err: any) => {
          this.toastService.showError(err.error.mensaje);
        }
      })
    } else {
      this.toastService.showError('Verificá los datos obligatorios')
    }
  }

}
