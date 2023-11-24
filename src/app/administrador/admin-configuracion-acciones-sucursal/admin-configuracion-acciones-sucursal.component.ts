import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Sucursal} from "../../models/sucursal";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../services/toast/toast-service";

@Component({
  selector: 'app-admin-configuracion-acciones-sucursal',
  templateUrl: './admin-configuracion-acciones-sucursal.component.html',
  styleUrls: ['./admin-configuracion-acciones-sucursal.component.css']
})
export class AdminConfiguracionAccionesSucursalComponent implements OnInit {

  @Input() Accion?: string;
  @Input() Id: number = 0;
  Sucursal: Sucursal = new Sucursal();
  NombreAccion: string = '';

  FormSucursal = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    direccion: new FormControl('', [
      Validators.required
    ]),
    telefono: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private sucursalService: StoreService, private toastService: ToastService, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    if (this.Accion === 'editar') {
      this.NombreAccion = 'Editar sucursal';
      this.sucursalService.getSucursal(this.Id).subscribe({
        next: (res: any) => {
          this.Sucursal = res.resultados;
        }
      })
    } else {
      this.NombreAccion = 'Crear sucursal';
    }
  }

  guardarCambios() {
    if (this.FormSucursal.valid) {
      if (this.Accion === 'editar') {
        this.sucursalService.editarSucursal(this.Id, this.FormSucursal.value).subscribe({
          next: (res: any) => {
            this.toastService.showSuccess(res.mensaje);
            this.activeModal.close('success');
          },
          error: (err: any) => {
            this.toastService.showError(err.error.mensaje);
          }
        });
      } else {
        this.sucursalService.crearSucursal(this.FormSucursal.value).subscribe({
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
