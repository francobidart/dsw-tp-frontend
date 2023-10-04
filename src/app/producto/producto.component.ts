import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Product, Products} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CartService} from '../services/cart.service';
import {ProductoService} from "../services/producto.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private titleService: Title, private cartService: CartService, private route: ActivatedRoute, private productoService: ProductoService) {
  }

  private routeSub: Subscription;
  Producto: Product;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.productoService.getById(parseInt(params['id'])).subscribe((res: any) => this.Producto = res.resultados[0]);
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
