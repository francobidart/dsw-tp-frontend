import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductoService} from "../../services/producto.service";
import {BuscarService} from "../../services/buscar/buscar.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "../../services/toast/toast-service";
import {AdminProductoNuevoComponent} from "../admin-producto-nuevo/admin-producto-nuevo.component";
import {TipoProducto} from "../../models/tipo-producto";
import {TipoProductoServiceService} from "../../services/tipo-producto-service.service";
import {AdminCategoriaNuevaComponent} from "../admin-categoria-nueva/admin-categoria-nueva.component";
import {CategoriaComponent} from "../../categoria/categoria.component";
import {
  AdminCategoriaConfirmarEliminacionComponent
} from "../admin-categoria-confirmar-eliminacion/admin-categoria-confirmar-eliminacion.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.css']
})
export class AdminCategoriaComponent implements OnInit {

  Categorias: Array<TipoProducto> = [];
  Buscador: string = ''

  constructor(private tipoProductoService: TipoProductoServiceService, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.cargarCategorias();
  }


  cargarCategorias() {
    this.tipoProductoService.get().subscribe({
      next: (res: ApiResponse<TipoProducto>) => {
        this.Categorias = res.resultados;
      }
    })
  }

  eliminarCategoria(categoria: TipoProducto) {
    const modalRef = this.modalService.open(AdminCategoriaConfirmarEliminacionComponent);
    modalRef.componentInstance.Categoria = categoria;
    modalRef.closed.subscribe({
      next: (data: string) => {
        if (data === 'eliminada') {
          this.cargarCategorias();
        }
      }
    })
  }

  editarCategoria(categoria: TipoProducto) {
    const refModal = this.modalService.open(NgbdModalEditarCategoria);
    refModal.componentInstance.id = categoria.id;
    refModal.closed.subscribe({
      next: (data: string) => {
        if (data === 'registrado') {
          this.cargarCategorias();
        }
      }
    })
  }

  nuevaCategoria() {
    const refModal = this.modalService.open(AdminCategoriaNuevaComponent);
    refModal.closed.subscribe({
      next: (data: string) => {
        if (data === 'registrado') {
          this.cargarCategorias();
        }
      }
    })
  }
}

@Component({
  selector: 'ngbd-modal-editar-categoria',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Editar categoría</h4>
      <button type="button" class="btn-close" aria-label="Close"
              (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <form name="FormCategoria" [formGroup]="FormCategoria">
        <fieldset>
          <div class="row">
            <div class="col">
              <label for="nombre">Nombre:</label>
              <input type="text" formControlName="nombre" id="nombre" [(ngModel)]="Categoria.nombre"
                     value="{{Categoria.nombre}}" class="form-control">
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" (click)="activeModal.close()">Cancelar</button>
      <button type="button" class="btn btn-outline-success" (click)="actualizarCategoria()">Guardar cambios
      </button>
    </div>
  `,
  imports: [
    ReactiveFormsModule
  ]
})
export class NgbdModalEditarCategoria {
  @Input() id = 0;

  Categoria: TipoProducto = new TipoProducto();

  FormCategoria = new FormGroup({
    nombre: new FormControl(this.Categoria.nombre, [
      Validators.required
    ])
  })

  constructor(public activeModal: NgbActiveModal, private tipoProductoService: TipoProductoServiceService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.tipoProductoService.getById(this.id).subscribe({
      next: (res: ApiResponse<TipoProducto>) => {
        this.Categoria = res.resultados[0];
      }
    })
  }

  actualizarCategoria() {
    if (this.FormCategoria.valid) {
      this.tipoProductoService.update(this.id, this.FormCategoria.value).subscribe({
        next: (res: ApiResponse<any>) => {
          this.activeModal.close('registrado');
          this.toastService.showSuccess(res.mensaje);
        },
        error: (err: any) => {
          this.toastService.showError(err.error.mensaje);
        }
      })
    } else {
      this.toastService.showError('Por favor ingresá todos los datos obligatorios')
    }
  }
}
