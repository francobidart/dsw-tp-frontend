import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../login-status.service'
import { PedidosService } from '../services/pedidos.service';
import {Router} from "@angular/router";
import { User } from '../models/user';
import { Pedido } from '../models/pedido';



@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {
 

  constructor(public loginstatusservice: LoginStatusService, private router: Router, 
    public pedidosservice: PedidosService) {
  }

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

  logout() {
    this.loginstatusservice.logout();
    this.router.navigate(['/']);
  }
}
