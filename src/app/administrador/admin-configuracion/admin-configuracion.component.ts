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
    this.sucursalesService.getSucursales().subscribe((res: any) => {
      this.Sucursales = res.resultados;
    })
  }

  cargarMediosDePago() {
    this.sucursalesService.getMediosDePago().subscribe((res: any) => {
      this.MediosDePago = res.resultados;
    })
  }

  habilitarSucursal(id: number) {
    this.sucursalesService.enableStore(id).subscribe((res: any) => {
      this.toastService.showSuccess(res.mensaje);
      this.cargarSucursales();
    }, (err: any) => {
      this.toastService.showError(err.error.mensaje);
    })
  }

  deshabilitarSucursal(id: number) {
    this.sucursalesService.disableStore(id).subscribe((res: any) => {
      this.toastService.showSuccess(res.mensaje);
      this.cargarSucursales();
    }, (err: any) => {
      this.toastService.showError(err.error.mensaje);
    })
  }

  nuevaSucursal() {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesSucursalComponent);
    modalRef.componentInstance.Accion = 'crear';
    modalRef.closed.subscribe((data: any) => {
      if (data === 'success') {
        this.cargarSucursales();
      }
    })
  }

  editarSucursal(id: number) {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesSucursalComponent);
    modalRef.componentInstance.Accion = 'editar';
    modalRef.componentInstance.Id = id;
    modalRef.closed.subscribe((data: any) => {
      if (data === 'success') {
        this.cargarSucursales();
      }
    })
  }

  habilitarMedioDePago(id: number) {
    this.sucursalesService.enableMedioDePago(id).subscribe((res: any) => {
      this.toastService.showSuccess(res.mensaje);
      this.cargarMediosDePago();
    }, (err: any) => {
      this.toastService.showError(err.error.mensaje);
    })
  }

  deshabilitarMedioDePago(id: number) {
    this.sucursalesService.disableMedioDePago(id).subscribe((res: any) => {
      this.toastService.showSuccess(res.mensaje);
      this.cargarMediosDePago();
    }, (err: any) => {
      this.toastService.showError(err.error.mensaje);
    })
  }

  nuevoMedioDePago() {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesMediodepagoComponent);
    modalRef.componentInstance.Accion = 'crear';
    modalRef.closed.subscribe((data: any) => {
      if (data === 'success') {
        this.cargarMediosDePago();
      }
    })
  }

  editarMedioDePago(id: number) {
    let modalRef = this.modalService.open(AdminConfiguracionAccionesMediodepagoComponent);
    modalRef.componentInstance.Accion = 'editar';
    modalRef.componentInstance.Id = id;
    modalRef.closed.subscribe((data: any) => {
      if (data === 'success') {
        this.cargarMediosDePago();
      }
    })
  }


}
