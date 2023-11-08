import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginStatusService} from "../login-status.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ToastService} from "../services/toast/toast-service";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  FormLogin = new FormGroup({
    usuario: new FormControl('', [
      Validators.required
    ]),
    clave: new FormControl('', [
      Validators.required
    ])
  })

  constructor(public loginService: LoginStatusService, private toastsService: ToastService) {
  }

  ngOnInit(): void {
  }

  @Output() closePopup = new EventEmitter<void>(); // Evento para cerrar el pop-up

  // Lógica de inicio de sesión y luego cerrar el pop-up
  login() {
    // Lógica de inicio de sesión aquí
    if (this.FormLogin.valid) {
      let user = (this.FormLogin.controls.usuario.value !== null) ? this.FormLogin.controls.usuario.value : '';
      let password = (this.FormLogin.controls.clave.value !== null) ? this.FormLogin.controls.clave.value : '';
      var me = this;
      this.loginService.login(user, password, () => {
        this.toastsService.show('¡Bienvenido!', {classname: 'bg-success text-light', delay: 3000})
        this.closePopup.emit();
      });
    }
  }


}


