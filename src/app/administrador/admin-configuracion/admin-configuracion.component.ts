import {Component, OnInit} from '@angular/core';
import {Sucursal} from "../../models/sucursal";
import {MedioDePago} from "../../models/mediodepago";
import {StoreService} from "../../services/store.service";
import {ToastService} from "../../services/toast/toast-service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  AdminConfiguracionAccionesSucursalComponent
} from "../admin-configuracion-acciones-sucursal/admin-configuracion-acciones-sucursal.component";
import {
  AdminConfiguracionAccionesMediodepagoComponent
} from "../admin-configuracion-acciones-mediodepago/admin-configuracion-acciones-mediodepago.component";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-configuracion',
  templateUrl: './admin-configuracion.component.html',
  styleUrls: ['./admin-configuracion.component.css']
})
export class AdminConfiguracionComponent implements OnInit {

  Sucursales: Array<Sucursal> = [];
  MediosDePago: Array<MedioDePago> = [];

  constructor(private sucursalesService: StoreService, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.cargarSucursales();
    this.cargarMediosDePago();
  }

  cargarSucursales() {
    this.sucursalesService.getSucursales().subscribe({
      next: (res: ApiResponse<Sucursal>) => {
        this.Sucursales = res.resultados;
      }
    })
  }

  cargarMediosDePago() {
    this.sucursalesService.getMediosDePago().subscribe({
      next: (res: ApiResponse<MedioDePago>) => {
        this.MediosDePago = res.resultados;
      }
    })
  }

  habilitarSucursal(id: number) {
    this.sucursalesService.enableStore(id).subscribe({
      next: (res: ApiResponse<Sucursal>) => {
        this.toastService.showSuccess(res.mensaje);
        this.cargarSucursales();
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }

  deshabilitarSucursal(id: number) {
    this.sucursalesService.disableStore(id).subscribe({
      next: (res: ApiResponse<Sucursal>) => {
        this.toastService.showSuccess(res.mensaje);
        this.cargarSucursales();
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }

  nuevaSucursal() {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesSucursalComponent);
    modalRef.componentInstance.Accion = 'crear';
    modalRef.closed.subscribe({
      next: (data: string) => {
        if (data === 'success') {
          this.cargarSucursales();
        }
      }
    })
  }

  editarSucursal(id: number) {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesSucursalComponent);
    modalRef.componentInstance.Accion = 'editar';
    modalRef.componentInstance.Id = id;
    modalRef.closed.subscribe({
      next: (data: string) => {
        if (data === 'success') {
          this.cargarSucursales();
        }
      }
    })
  }

  habilitarMedioDePago(id: number) {
    this.sucursalesService.enableMedioDePago(id).subscribe({
      next: (res: ApiResponse<MedioDePago>) => {
        this.toastService.showSuccess(res.mensaje);
        this.cargarMediosDePago();
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }

  deshabilitarMedioDePago(id: number) {
    this.sucursalesService.disableMedioDePago(id).subscribe({
      next: (res: ApiResponse<MedioDePago>) => {
        this.toastService.showSuccess(res.mensaje);
        this.cargarMediosDePago();
      },
      error: (err: any) => {
        this.toastService.showError(err.error.mensaje);
      }
    })
  }

  nuevoMedioDePago() {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesMediodepagoComponent);
    modalRef.componentInstance.Accion = 'crear';
    modalRef.closed.subscribe({
      next: (data: string) => {
        if (data === 'success') {
          this.cargarMediosDePago();
        }
      }
    })
  }

  editarMedioDePago(id: number) {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesMediodepagoComponent);
    modalRef.componentInstance.Accion = 'editar';
    modalRef.componentInstance.Id = id;
    modalRef.closed.subscribe({
      next: (data: string) => {
        if (data === 'success') {
          this.cargarMediosDePago();
        }
      }
    })
  }
}
