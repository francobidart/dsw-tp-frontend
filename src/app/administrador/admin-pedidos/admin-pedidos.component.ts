import {Component, OnInit} from '@angular/core';
import {Pedido} from "../../models/pedido";
import {PedidosService} from "../../services/pedidos.service";
import {ApiResponse} from "../../models/api-response";

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent implements OnInit {

  Pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {
  }

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidosService.getPedidos().subscribe({
      next: (res: ApiResponse<Pedido>) => {
        this.Pedidos = res.resultados;
      }
    })
  }
}
