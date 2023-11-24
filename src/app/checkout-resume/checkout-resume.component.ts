import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";
import {LoginStatusService} from "../login-status.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Sucursal} from "../models/sucursal";
import {StoreService} from "../services/store.service";
import {MedioDePago} from "../models/mediodepago";
import {ToastService} from "../services/toast/toast-service";

@Component({
  selector: 'app-checkout-resume',
  templateUrl: './checkout-resume.component.html',
  styleUrls: ['./checkout-resume.component.css']
})
export class CheckoutResumeComponent implements OnInit {

  Usuario: User = new User();
  Sucursales: Array<Sucursal> = [];
  MediosDePago: Array<MedioDePago> = [];
  SucursalSeleccionada: string = '1';
  MedioDePagoSeleccionado: number = 1;

  constructor(public cartService: CartService, public loginService: LoginStatusService, private router: Router, public userService: UserService, private storeService: StoreService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.loginService.validarSesion(() => {
      if (!this.loginService.isAuthenticated) {
        this.router.navigate(['login'], {
          queryParams: {
            siguiente: 'checkout'
          }
        });
      } else {
        this.userService.obtenerInformacionDeCuenta().subscribe({
          next: (res: any) => {
            this.Usuario = res.resultados;
          }
        })
        this.storeService.getSucursales().subscribe({
          next: (res: any) => {
            this.Sucursales = res.resultados;
          }
        })
        this.storeService.getMediosDePago().subscribe({
          next: (res: any) => {
            this.MediosDePago = res.resultados;
          }
        })
        this.cartService.updateItems();
      }
    })
  }

  confirmarCompra() {
    if (!this.validarDatos()) {
      this.cartService.enviarPedido(this.SucursalSeleccionada, this.MedioDePagoSeleccionado).subscribe({
        next: (res: any) => {
          let idPedido = res.resultados.id;
          this.toastService.showSuccess('¡Registramos tu pedido! | Orden N°: ' + idPedido);
          this.cartService.clearCart(() => {
            this.router.navigate(['/']);
          });
        },
        error: (error: any) => {
          if (error.error.mensaje) {
            this.toastService.showError(error.error.mensaje);
          } else {
            this.toastService.showError('Ocurrió un error al registrar el pedido');
          }
        }
      });
    }
  }

  private validarDatos(): boolean {
    let error = false;
    if (this.SucursalSeleccionada === '') {
      this.toastService.showError('Seleccionar una sucursal es obligatorio');
      error = true;
    }
    if (this.MedioDePagoSeleccionado === undefined) {
      this.toastService.showError('Seleccionar un medio de pago es obligatorio');
      error = true;
    }
    return error;
  }
}
