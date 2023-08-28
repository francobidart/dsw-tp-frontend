import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock:number;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productos: Producto[] = [];
  nuevoProducto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    stock:0,
  };

  agregarProducto() {
    if (this.nuevoProducto.nombre && this.nuevoProducto.descripcion && this.nuevoProducto.precio && this.nuevoProducto.imagen && this.nuevoProducto.stock) {
      this.productos.push({ ...this.nuevoProducto });
      this.nuevoProducto = {
        nombre: '',
        descripcion: '',
        precio: 0,
        imagen: '',
        stock:0,
      };
    }
  }
}