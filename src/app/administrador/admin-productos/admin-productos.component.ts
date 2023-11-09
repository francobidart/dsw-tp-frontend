import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductoService} from "../../services/producto.service";
import {BuscarService} from "../../services/buscar/buscar.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  AdminProductoModalDetalleComponent
} from "../admin-producto-modal-detalle/admin-producto-modal-detalle.component";
import {ToastService} from "../../services/toast/toast-service";
import {AdminProductoNuevoComponent} from "../admin-producto-nuevo/admin-producto-nuevo.component";

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {

  Productos: Array<Product> = [];
  ProductosDeshabilitados: Array<Product> = [];
  Buscador: string = ''

  constructor(private productosService: ProductoService, private buscarService: BuscarService, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  buscarProductos(value: string | '') {
    this.Buscador = value;
    if (this.Buscador === '') {
      this.cargarProductos();
    } else {
      this.buscarService.buscar(this.Buscador).subscribe((res: any) => {
        this.Productos = res.resultados;
      })
    }
  }

  cargarProductos() {
    this.productosService.get().subscribe((res: any) => {
      this.Productos = res.resultados;
    })

    this.productosService.getDisabled().subscribe((res: any) => {
      this.ProductosDeshabilitados = res.resultados;
    })
  }

  habilitarProducto(producto: Product) {
    return this.productosService.enableProducto(producto.id).subscribe((res: any) => {
      this.toastService.showSuccess(res.mensaje)
      this.cargarProductos();
    }, (err) => {
      this.toastService.showError(err);
    })
  }

  deshabilitarProducto(producto: Product) {
    return this.productosService.disableProducto(producto.id).subscribe((res: any) => {
      this.toastService.showSuccess(res.mensaje)
      this.cargarProductos();
    }, (err) => {
      this.toastService.showError(err);
    })
  }

  nuevoProducto() {
    const refModal = this.modalService.open(AdminProductoNuevoComponent);
    refModal.closed.subscribe((data: any) => {
      if(data === 'registrado') {
        this.cargarProductos();
      }
    })
  }
}
