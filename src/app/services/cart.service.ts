import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  total: number=0;

  constructor(public router: Router) {
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
    this.router.navigate(['/']);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.updateTotal();
    window.localStorage.removeItem('cart');
    return this.items;
  }

  updateTotal(): void {
    let total = 0;
    for (const item of this.items) {
      total += item.precio;
    }
    this.total = total;
  }
}
