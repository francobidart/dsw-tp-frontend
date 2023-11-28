import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast/toast-service";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-usuarios-cambiar-clave',
  templateUrl: './admin-usuarios-cambiar-clave.component.html',
  styleUrls: ['./admin-usuarios-cambiar-clave.component.css']
})
export class AdminUsuariosCambiarClaveComponent implements OnInit {

  Id: number = 0;
  Usuario: User = new User();

  constructor(public activeModal: NgbActiveModal, private toastService: ToastService, private userService: UserService) {
  }

  FormUsuario = new FormGroup({
    password: new FormControl('', [
      Validators.required
    ])
  })

  ngOnInit(): void {
    this.userService.getUsuario(this.Id).subscribe({
      next: (res: ApiResponse<User>) => {
        this.Usuario = res.resultados[0]
      }
    })
  }

  cambiarClave() {
    if (this.FormUsuario.valid) {
      this.userService.cambiarClave(this.Id, this.FormUsuario.value).subscribe({
        next: (res: ApiResponse<User>) => {
          this.toastService.showSuccess(res.mensaje);
          this.activeModal.close('guardado');
        },
        error: (err: any) => {
          this.toastService.showError(err.error.mensaje);
        }
      })
    } else {
      this.toastService.showError('Ingresá una nueva clave para continuar.')
    }
  }
}
