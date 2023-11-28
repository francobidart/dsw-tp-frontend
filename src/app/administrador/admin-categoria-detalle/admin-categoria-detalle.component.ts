import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductoService} from "../../services/producto.service";
import {BuscarService} from "../../services/buscar/buscar.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast/toast-service";
import {AdminProductoNuevoComponent} from "../admin-producto-nuevo/admin-producto-nuevo.component";
import {TipoProducto} from "../../models/tipo-producto";
import {ActivatedRoute} from "@angular/router";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-categoria-detalle',
  templateUrl: './admin-categoria-detalle.component.html',
  styleUrls: ['./admin-categoria-detalle.component.css']
})
export class AdminCategoriaDetalleComponent implements OnInit {

  Productos: Array<Product> = [];
  CategoriaId: number = 0;
  Categoria: TipoProducto = new TipoProducto();

  constructor(private productosService: ProductoService, private tipoProductoService: TipoProductoServiceService, private route: ActivatedRoute, private buscarService: BuscarService, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.CategoriaId = this.route.snapshot.params['id'];
    this.tipoProductoService.getById(this.CategoriaId).subscribe({
      next: (res: ApiResponse<TipoProducto>) => {
        this.Categoria = res.resultados[0]
        this.cargarProductos()
      }
    })
  }

  cargarProductos() {
    this.productosService.getByCategory(this.Categoria.id).subscribe({
      next: (res: ApiResponse<Product>) => {
        this.Productos = res.resultados;
      }
    })
  }
}
