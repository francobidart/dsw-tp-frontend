import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Product} from '../models/product';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../services/cart.service';
import {ProductoService} from "../services/producto.service";
import {ToastService} from "../services/toast/toast-service";
import {LoginStatusService} from "../login-status.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private titleService: Title, private cartService: CartService, private route: ActivatedRoute, private productoService: ProductoService, private toastService: ToastService, public loginStatus: LoginStatusService) {
  }

  Producto: Product = new Product();
  UnidadesSeleccionadas = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productoService.getById(parseInt(params['id'])).subscribe({
        next: (res: any) => {
          this.Producto = res.resultados[0]
          this.titleService.setTitle(this.Producto.nombre);
        }
      });
    });
  }

  addToCart() {
    this.UnidadesSeleccionadas = this.cartService.getCantidadAgregadaProducto(this.Producto.id);
    if (this.UnidadesSeleccionadas < this.Producto.stock) {
      this.cartService.addToCart(this.Producto);
    } else {
      this.toastService.show('No se puede agregar más unidades de este producto.')
    }
  }

  addToCartAndGoToSummary() {
    this.UnidadesSeleccionadas = this.cartService.getCantidadAgregadaProducto(this.Producto.id);
    if (this.UnidadesSeleccionadas < this.Producto.stock) {
      this.cartService.addAndToCartGoToSummary(this.Producto);
    } else {
      this.toastService.show('No podés agregar más unidades de este producto.')
    }
  }
}
