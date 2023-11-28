import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {ToastService} from "../../services/toast/toast-service";
import {ProductoService} from "../../services/producto.service";
import {TipoProducto} from "../../models/tipo-producto";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-categoria-confirmar-eliminacion',
  templateUrl: './admin-categoria-confirmar-eliminacion.component.html',
  styleUrls: ['./admin-categoria-confirmar-eliminacion.component.css']
})
export class AdminCategoriaConfirmarEliminacionComponent {

  @Input() Categoria: TipoProducto = new TipoProducto();

  constructor(public activeModal: NgbActiveModal, private tipoProductoService: TipoProductoServiceService, private toastService: ToastService) {
  }

  confirmarEliminacion() {
    return this.tipoProductoService.delete(this.Categoria.id).subscribe({
      next: (res: ApiResponse<any>) => {
        this.toastService.showSuccess(res.mensaje)
        this.activeModal.close('eliminada');
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }
}
