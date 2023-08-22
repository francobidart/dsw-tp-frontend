import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import { Product } from '../models/product'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Example = [
    {
      "id": 1,
      "nombre": "Prueba categoria"
    },
    {
      "id": 2,
      "nombre": "Celulares"
    }
  ]

  CartItems: Product[] = [];
  Total = 0;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.CartItems = this.cartService.items;
    this.Total = this.cartService.total;
  }

  FlushCart() {
    this.CartItems = this.cartService.clearCart();
  }
}
