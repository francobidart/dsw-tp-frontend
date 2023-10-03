import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from '../services/cart.service';
import { Product } from '../models/product'
import{LoginStatusService} from '../login-status.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Example = [
    {
      "id": 1,
      "nombre": "Procesadores"
    },
    {
      "id": 2,
      "nombre": "Placas de Video"
    },
    {
      "id": 3,
      "nombre": "Discos Solidos"
    },
    {
      "id": 4,
      "nombre": "Memoria RAM"
    },
    {
      "id": 5,
      "nombre": "Otros"
    }
  ]

  CartItems: Product[] = [];
  Total = 0;
  modalSwitch: boolean=false;

  constructor(public cartService: CartService, public loginstatusservice: LoginStatusService) {
  }

  ngOnInit(): void {
    this.CartItems = this.cartService.items;
    this.Total = this.cartService.total;
   
    
  }

  FlushCart() {
    this.CartItems = this.cartService.clearCart();
  }
 
  isLoginPopupVisible = false; // Variable para controlar la visibilidad del pop-up

  // Método para mostrar el pop-up de inicio de sesión
  showLoginPopup() {
    this.isLoginPopupVisible = true;
  }

  // Método para ocultar el pop-up de inicio de sesión
  hideLoginPopup() {
    this.isLoginPopupVisible = false;
  }

}

