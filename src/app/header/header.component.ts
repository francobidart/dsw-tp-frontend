import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../models/product'
import {LoginStatusService} from '../login-status.service'
import {TipoProductoServiceService} from "../services/tipo-producto-service.service";
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Categorias: any = []

  CartItems: Product[] = [];
  Total = 0;
  modalSwitch: boolean = false;

  constructor(public cartService: CartService, public loginstatusservice: LoginStatusService, public tipoProductoService: TipoProductoServiceService) {
  }

  ngOnInit(): void {
    this.CartItems = this.cartService.items;
    this.Total = this.cartService.total;
    this.tipoProductoService.get().subscribe({
      next: (res: any) => {
        this.Categorias = res.resultados
      }
    })
    this.loginstatusservice.validarSesion();
  }

  DeleteItem(item: any) {
    this.cartService.DeleteItem(item);
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

