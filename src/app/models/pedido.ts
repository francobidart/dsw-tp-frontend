export class Pedido {
  id: number = 0;
  montoTotal: number = 0;
  estadoActual: number = 1;
  createdAt: string = '';
  updatedAt: string = '';
  detallePedido: Array<DetallePedido> = [];
  clientePedido: ClientePedido = new ClientePedido();
  historialEstadoPedido: Array<HistorialEstadoPedido> = new Array<HistorialEstadoPedido>();
  detalleEstadoActual?: DetalleEstadoPedido;
  medioDePagoPedido: MedioPagoPedido = new MedioPagoPedido();
  sucursalPedido: SucursalPedido = new SucursalPedido();
}

export class MedioPagoPedido {
  id: number = 0;
  nombre: string = '';
  tag: string = '';
}

export class SucursalPedido {
  id: number = 0;
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';
}

export class DetalleEstadoPedido {
  nombre: string = '';
}

export class ClientePedido {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  email: string = ''
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

export class HistorialEstadoPedido {
  estado?: number;
  createdAt?: string;
  detalleEstado?: DetalleEstadoPedido
}
