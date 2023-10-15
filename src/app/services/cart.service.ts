import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  total: number = 0;

  constructor(public router: Router, private httpClient: HttpClient) {
    const cartSaved = localStorage.getItem('cart');
    if (cartSaved && cartSaved.length > 0) {
      this.items = JSON.parse(cartSaved);
      this.total = 0;
      this.updateTotal();
    }
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.updateTotal();
    window.localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getTotal() {
    return this.total;
  }

  getItemsCount() {
    return this.items.length;
  }

  addAndToCartGoToSummary(product: Product) {
    this.addToCart(product);
    this.router.navigate(['/checkout']);
  }

  DeleteItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1)
    this.updateTotal();
  }

  enviarPedido(sucursalRetiro: string, mediodepago: string) {
    return this.httpClient.post(environment.apiUrl + 'pedidos/registrar', {
      articulos: this.items,
      sucursal: sucursalRetiro,
      mediodepago: mediodepago
    });
  }

  getItems() {
    return this.items;
  }

  clearCart(callback: any | null = null) {
    this.items = [];
    this.updateTotal();
    window.localStorage.removeItem('cart');
    if(callback) {
      callback();
    }
    return this.items;
  }

  getCantidadAgregadaProducto(id: number | null) {
    let cantidad = 0;
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i].id === id) {
        cantidad += 1
      }
    }
    return cantidad;
  }

  updateTotal(): void {
    let total = 0;
    for (const item of this.items) {
      total += item.precio;
    }
    this.total = total;
  }
}
