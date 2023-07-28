import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  Id:number=0;
  Precio:number=0;
  Nombre:string='a';
  Descripcion:string='a';
  Stock:number=0;

}
