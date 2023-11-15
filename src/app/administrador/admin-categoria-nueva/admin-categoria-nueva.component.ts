import { Component, OnInit } from '@angular/core';
import {TipoProducto} from "../../models/tipo-producto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {ToastService} from "../../services/toast/toast-service";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-admin-categoria-nueva',
  templateUrl: './admin-categoria-nueva.component.html',
  styleUrls: ['./admin-categoria-nueva.component.css']
})
export class AdminCategoriaNuevaComponent implements OnInit {

  Categorias: Array<TipoProducto> = [];

  FormCategoria = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ])
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

  registrarCategoria() {
    if (this.FormCategoria.valid) {
      this.tipoProductoService.create(this.FormCategoria.value).subscribe((res: any) => {
        this.activeModal.close('registrado');
        this.toastService.showSuccess(res.mensaje);
      }, (err: any) => {
        this.toastService.showError(err.error.mensaje);
      })
    } else {
      this.toastService.showError('Por favor ingresá todos los datos obligatorios')
    }
  }
}