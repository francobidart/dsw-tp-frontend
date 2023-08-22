import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Product, Products} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private titleService: Title, private cartService: CartService, private route: ActivatedRoute) {
  }

  private routeSub: Subscription;
  Producto: Product;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params)
      this.Producto = Products.find(item => item.id === parseInt(params['id']))!;
      this.titleService.setTitle(this.Producto.nombre);
    });
  }

  openInstallmentsModal(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.Producto);
  }

  addToCartAndGoToSummary() {
    this.cartService.addAndToCartGoToSummary(this.Producto);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


}
