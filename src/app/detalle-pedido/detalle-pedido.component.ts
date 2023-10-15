import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pedido} from "../models/pedido";
import {PedidosService} from "../services/pedidos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../services/toast/toast-service";

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  Pedido: Pedido = new Pedido();

  constructor(private pedidosService: PedidosService, private route: ActivatedRoute, private toastService: ToastService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.loadData(routeParams['id']);
    });
  }

  loadData(id: number) {
    this.pedidosService.getPedido(id).subscribe((res: any) => {
      this.Pedido = res.resultados;
      console.log(this.Pedido.detallePedido);
    }, (error: any) => {
      if (error.error.mensaje) {
        this.toastService.showError(error.error.mensaje);
        this.router.navigate(['/']);
      } else {
        this.toastService.showError('Ocurrió un error al consultar el pedido');
      }
    });
  }
}
