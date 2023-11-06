import { Component, OnInit } from '@angular/core';
import {Pedido} from "../../models/pedido";
import {PedidosService} from "../../services/pedidos.service";

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent implements OnInit {

  Pedidos: Pedido[] = [];
  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidosService.getPedidos().subscribe((res: any) => {
      this.Pedidos = res.resultados;
    })
  }
}
