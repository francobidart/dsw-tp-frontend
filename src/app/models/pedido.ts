export class Pedido {
  id: number = 0;
  montoTotal: number = 0;
  estadoActual: number = 1;
  createdAt: string = '';
  updatedAt: string = '';
  detallePedido: Array<DetallePedido> = [];
  clientePedido?: object = [];
}

export class DetallePedido {
  detalle?: string;
  cantidad?: number;
  imagen?: string;
  precioUnitario?: number;
  montoTotal?: number;
  detalleArticulo: DetalleArticulo = new DetalleArticulo();
}

export class DetalleArticulo {
  nombre?: string;
  imagen?: string;
}
