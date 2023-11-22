import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../login-status.service'
import { PedidosService } from '../services/pedidos.service';
import {Router} from "@angular/router";
import { User } from '../models/user';
import { Pedido } from '../models/pedido';
import {UserService} from "../services/user.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ToastService} from "../services/toast/toast-service";


@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {
 
  formulario: FormGroup ;
  
  constructor(public loginstatusservice: LoginStatusService, private router: Router, private usuarioService: UserService,
    private toastService: ToastService,
    public pedidosservice: PedidosService) {
      this.formulario = new FormGroup({
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required),
        telefono: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        repetirpassword: new FormControl('', Validators.required),
        
      });}

  ngOnInit() {
    this.loginstatusservice.getPerfil().subscribe(data => {
      this.perfil = data.resultados;
    });
    this.pedidosservice.getPedidoClient().subscribe((ped: any) =>{ this.pedidos = ped.resultados; console.log(this.pedidos)})
    
  }

  pedidos: Array<Pedido>=[];

  perfil: User = new User();

  opcion: number = 1;

  cambiaop1() {
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


editarUsuario(){
  if (this.formulario.valid) {
    if (this.formulario.value.password === this.formulario.value.repetirpassword) {
      this.usuarioService.actualizarCliente(this.formulario.value).subscribe((res: any) => {
        this.toastService.showSuccess(res.mensaje);
        
      }, (error: any) => {
        this.toastService.showError(error.error.mensaje);
      })
    } 
  } 
}


}
  

