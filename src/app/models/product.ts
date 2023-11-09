import {TipoProducto} from "./tipo-producto";

export class Product {
  id: number | null = null;
  TipoProducto?: TipoProducto;
  precio: number = 0;
  nombre: string = '';
  categoria: number | string = '';
  descripcion?: string | null;
  stock: number = 0;
  imagen?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
