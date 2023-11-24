import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../login-status.service'
import {PedidosService} from '../services/pedidos.service';
import {Router} from "@angular/router";
import {User} from '../models/user';
import {Pedido} from '../models/pedido';
import {UserService} from "../services/user.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastService} from "../services/toast/toast-service";

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(public loginstatusservice: LoginStatusService, private router: Router, private usuarioService: UserService,
              private toastService: ToastService, public pedidosservice: PedidosService) {
  }
  ngOnInit() {
    this.loginstatusservice.getPerfil().subscribe({
      next: data => {
        this.perfil = data.resultados;
      }
    });
    this.pedidosservice.getPedidoClient().subscribe({
      next: (ped: any) => {
        this.pedidos = ped.resultados;
      }
    })
  }

  pedidos: Array<Pedido> = [];

  perfil: User = new User();

  opcion: number = 1;

  cambiaop1() {
    this.loginstatusservice.getPerfil().subscribe({
      next: data => {
        this.perfil = data.resultados;
      }
    });
    this.opcion = 1;
  }

  cambiaop2() {
    this.opcion = 2;
  }

  cambiaop3() {
    this.opcion = 3;

  }

  logout() {
    this.loginstatusservice.logout();
    this.router.navigate(['/']);
  }

  editarUsuario() {
    if (this.formulario.valid) {
      this.usuarioService.actualizarCliente(this.formulario.value).subscribe({
        next: (res: any) => {
          this.toastService.showSuccess(res.mensaje);
          this.cambiaop1()
        },
        error: (error: any) => {
          this.toastService.showError(error.error.mensaje);
        }
      })
    } else {
      this.toastService.showError("Complete los datos correctamente");
    }
  }
}


