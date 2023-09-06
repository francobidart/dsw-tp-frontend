import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-checkout-resume',
  templateUrl: './checkout-resume.component.html',
  styleUrls: ['./checkout-resume.component.css']
})
export class CheckoutResumeComponent implements OnInit {

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    console.log(this.cartService.items.length)
  }
}
