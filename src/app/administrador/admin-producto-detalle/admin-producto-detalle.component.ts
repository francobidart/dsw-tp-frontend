import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductoService} from "../../services/producto.service";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TipoProducto} from "../../models/tipo-producto";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../services/toast/toast-service";

@Component({
  selector: 'app-admin-producto-detalle',
  templateUrl: './admin-producto-detalle.component.html',
  styleUrls: ['./admin-producto-detalle.component.css']
})
export class AdminProductoDetalleComponent implements OnInit {

  IdProducto = 0;
  Producto: Product = new Product();
  NombreProducto: string = '';
  Categorias: Array<TipoProducto> = [];
  Edicion: boolean = false;

  FormProducto = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    categoria: new FormControl('', [
      Validators.required
    ]),
    stock: new FormControl('', [
      Validators.required
    ]),
    precio: new FormControl('', [
      Validators.required
    ]),
    descripcion: new FormControl('', []),
    imagen: new FormControl('', []),
  });

  constructor(private productosService: ProductoService, private tipoProductoService: TipoProductoServiceService, private route: ActivatedRoute, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.IdProducto = this.route.snapshot.params['id'];
    let modoForm = this.route.snapshot.queryParams['mode'];
    if(modoForm !== undefined && modoForm === 'edit') {
      this.FormProducto.enable();
    } else {
      this.FormProducto.disable();
    }
    this.cargarDatos();
  }

  cargarProducto() {
    this.productosService.getById(this.IdProducto).subscribe((res: any) => {
      this.Producto = res.resultados[0];
      let selectCategoria = this.Producto.categoria
      this.NombreProducto = res.resultados[0].nombre;
      this.FormProducto.controls.categoria.setValue(selectCategoria.toString());
    })
  }

  cargarDatos() {
    this.tipoProductoService.get().subscribe((res: any) => {
      this.Categorias = res.resultados;
      this.cargarProducto();
    })
  }

  guardarProducto() {
    this.productosService.updateProducto(this.IdProducto, this.FormProducto.value).subscribe((res: any) => {
      this.toastService.showSuccess('Producto actualizado correctamente');
      this.FormProducto.disable();
      this.cargarDatos();
    }, (err: any) => {
      this.toastService.showError(err.error.mensaje);
    })
  }

}
