import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginStatusService} from "../login-status.service";
import {ToastService} from "../services/toast/toast-service";
import {ActivatedRoute, Router} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FormLogin = new FormGroup({
    usuario: new FormControl('', [
      Validators.required
    ]),
    clave: new FormControl('', [
      Validators.required
    ])
  })

  constructor(public loginService: LoginStatusService, private toastsService: ToastService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.validarSesion(() => {
      if (this.loginService.isAuthenticated) {
        this.router.navigate(['']);
      }
    });
  }

  login() {
    if (this.FormLogin.valid) {
      let user = (this.FormLogin.controls.usuario.value !== null) ? this.FormLogin.controls.usuario.value : '';
      let password = (this.FormLogin.controls.clave.value !== null) ? this.FormLogin.controls.clave.value : '';
      var me = this;
      this.loginService.login(user, password, () => {
        this.toastsService.show('¡Bienvenido!', {classname: 'bg-success text-light', delay: 3000})
        if (this.route.snapshot.queryParams['siguiente'] !== undefined) {
          this.router.navigate([this.route.snapshot.queryParams['siguiente']]);
        } else {
          this.router.navigate([''])
        }
      });
    } else {
      this.toastsService.show('El usuario y la clave son obligatorios', {
        classname: 'bg-danger text-light',
        delay: 3000
      })
    }
  }

}
