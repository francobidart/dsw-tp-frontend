import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {TipoProducto} from "../../models/tipo-producto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../services/toast/toast-service";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-admin-producto-nuevo',
  templateUrl: './admin-producto-nuevo.component.html',
  styleUrls: ['./admin-producto-nuevo.component.css']
})
export class AdminProductoNuevoComponent implements OnInit {

  Categorias: Array<TipoProducto> = [];

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
    imagen: new FormControl(''),
    descripcion: new FormControl('')
  })

  constructor(public activeModal: NgbActiveModal, private tipoProductoService: TipoProductoServiceService, private toastService: ToastService, private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.cargarCategorias()
  }

  cargarCategorias() {
    this.tipoProductoService.get().subscribe((res: any) => {
      this.Categorias = res.resultados;
    })
  }

  registrarProducto() {
    if (this.FormProducto.valid) {
      this.productoService.createProducto(this.FormProducto.value).subscribe((res: any) => {
        this.activeModal.close('registrado');
        this.toastService.showSuccess(res.mensaje);
      }, (err: any) => {
        this.toastService.showError(err.error.mensaje);
      })
    } else {
      this.toastService.showError('Faltan datos obligatorios.')
    }
  }
}
