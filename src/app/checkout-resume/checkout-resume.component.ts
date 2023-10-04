import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";
import {LoginStatusService} from "../login-status.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-checkout-resume',
  templateUrl: './checkout-resume.component.html',
  styleUrls: ['./checkout-resume.component.css']
})
export class CheckoutResumeComponent implements OnInit {

  Usuario: User = new User();

  constructor(public cartService: CartService, public loginService: LoginStatusService, private router: Router, public userService: UserService) {
  }

  ngOnInit(): void {
    this.loginService.validarSesion(() => {
      if (!this.loginService.isAuthenticated) {
        this.router.navigate(['login'], {
          queryParams: {
            siguiente: 'checkout'
          }
        });
      } else {
        this.userService.obtenerInformacionDeCuenta().subscribe((res: any) => {
          this.Usuario = res.resultados;
          console.log(this.Usuario)
        })
      }
    })
  }
}
