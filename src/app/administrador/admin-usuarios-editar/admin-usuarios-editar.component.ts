import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast/toast-service";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-admin-usuarios-editar',
  templateUrl: './admin-usuarios-editar.component.html',
  styleUrls: ['./admin-usuarios-editar.component.css']
})
export class AdminUsuariosEditarComponent implements OnInit {

  Id: number = 0;
  Usuario: User = new User();
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
    ])
  })

  ngOnInit(): void {
    this.userService.getUsuario(this.Id).subscribe((res: any) => {
      this.Usuario = res.resultados
    })
  }

  actualizarUsuario() {
    if (this.FormUsuario.valid) {
      this.userService.actualizarUsuario(this.Id, this.FormUsuario.value).subscribe((res: any) => {
        this.toastService.showSuccess(res.mensaje);
        this.activeModal.close('guardado');
      }, (err: any) => {
        this.toastService.showError(err.error.mensaje);
      })
    } else {
      this.toastService.showError('Verificá los datos obligatorios')
    }
  }

}
