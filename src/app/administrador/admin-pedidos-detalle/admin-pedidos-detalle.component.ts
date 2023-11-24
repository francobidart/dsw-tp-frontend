import {Component, OnInit} from '@angular/core';
import {Pedido} from "../../models/pedido";
import {PedidosService} from "../../services/pedidos.service";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "../../services/toast/toast-service";

@Component({
  selector: 'app-admin-pedidos-detalle',
  templateUrl: './admin-pedidos-detalle.component.html',
  styleUrls: ['./admin-pedidos-detalle.component.css']
})
export class AdminPedidosDetalleComponent implements OnInit {

  IdPedido: number = 0;
  Pedido: Pedido = new Pedido();

  constructor(private pedidosService: PedidosService, private activatedRoute: ActivatedRoute, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.IdPedido = this.activatedRoute.snapshot.params['id'];
    this.cargarPedido();
  }

  cargarPedido() {
    this.pedidosService.getPedido(this.IdPedido).subscribe({
      next: (res: any) => {
        this.Pedido = res.resultados;
      }
    })
  }

  entregarPedido() {
    this.pedidosService.entregarPedido(this.IdPedido).subscribe({
      next: (res: any) => {
        this.toastService.showSuccess('Pedido entregado correctamente');
        this.cargarPedido();
      },
      error: (error: any) => {
        this.toastService.showError(error);
      }
    })
  }

  cancelarPedido() {
    this.pedidosService.cancelarPedido(this.IdPedido).subscribe({
      next: (res: any) => {
        this.toastService.showSuccess('Pedido cancelado correctamente');
        this.cargarPedido();
      },
      error: (error: any) => {
        this.toastService.showError(error);
      }
    })
  }
}
