import {Component, OnInit} from '@angular/core';
import {PedidosService} from "../../services/pedidos.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private pedidosService: PedidosService) {
  }

  PedidosPendientes: number = 0;
  TotalFacturado: number = 0;
  PedidosDelMes: number = 0;

  ngOnInit(): void {
    this.getPedidosPendientes();
  }

  getPedidosPendientes() {
    this.pedidosService.getPedidosPendientes().subscribe({
      next: (res: any) => {
        this.PedidosPendientes = res.resultados.cantidadPedidosPendientes;
        this.TotalFacturado = res.resultados.importeVentasMensuales;
        this.PedidosDelMes = res.resultados.cantidadPedidosMes;
      }
    })
  }

}
