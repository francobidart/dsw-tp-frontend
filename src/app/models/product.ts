import {TipoProducto} from "./tipo-producto";

export class Product {
  id?: number;
  TipoProducto?: TipoProducto;
  precio: number;
  nombre: string;
  categoria?: number;
  descripcion?: string | null;
  stock?: number;
  imagen?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
