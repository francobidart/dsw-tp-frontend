import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";
import {LoginStatusService} from "../login-status.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-resume',
  templateUrl: './checkout-resume.component.html',
  styleUrls: ['./checkout-resume.component.css']
})
export class CheckoutResumeComponent implements OnInit {

  constructor(public cartService: CartService, public loginService: LoginStatusService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.loginService.isAuthenticated) {
      this.router.navigate(['login'], {
        queryParams: {
          siguiente: 'checkout'
        }
      });
    }
  }
}
