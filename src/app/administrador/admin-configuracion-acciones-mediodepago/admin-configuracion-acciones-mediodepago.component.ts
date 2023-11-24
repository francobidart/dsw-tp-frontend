import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../../services/store.service";
import {ToastService} from "../../services/toast/toast-service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MedioDePago} from "../../models/mediodepago";

@Component({
  selector: 'app-admin-configuracion-acciones-mediodepago',
  templateUrl: './admin-configuracion-acciones-mediodepago.component.html',
  styleUrls: ['./admin-configuracion-acciones-mediodepago.component.css']
})
export class AdminConfiguracionAccionesMediodepagoComponent implements OnInit {

  @Input() Accion?: string;
  @Input() Id: number = 0;
  MedioDePago: MedioDePago = new MedioDePago();
  NombreAccion: string = '';

  FormMedioDePago = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    descripcion: new FormControl('')
  })

  constructor(private sucursalService: StoreService, private toastService: ToastService, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    if (this.Accion === 'editar') {
      this.NombreAccion = 'Editar medio de pago';
      this.sucursalService.getMedioDePago(this.Id).subscribe({
        next: (res: any) => {
          this.MedioDePago = res.resultados[0];
        }
      })
    } else {
      this.NombreAccion = 'Crear medio de pago';
    }
  }

  guardarCambios() {
    if (this.FormMedioDePago.valid) {
      if (this.Accion === 'editar') {
        this.sucursalService.editarMedioDePago(this.Id, this.FormMedioDePago.value).subscribe({
          next: (res: any) => {
            this.toastService.showSuccess(res.mensaje);
            this.activeModal.close('success');
          },
          error: (err: any) => {
            this.toastService.showError(err.error.mensaje);
          }
        });
      } else {
        this.sucursalService.crearMedioDePago(this.FormMedioDePago.value).subscribe({
          next: (res: any) => {
            this.toastService.showSuccess(res.mensaje);
            this.activeModal.close('success');
          },
          error: (err: any) => {
            this.toastService.showError(err.error.mensaje);
          }
        });
      }
    } else {
      this.toastService.showError('Por favor ingrese todos los datos obligatorios.')
    }
  }

}
