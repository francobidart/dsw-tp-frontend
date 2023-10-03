import { Component, OnInit } from '@angular/core';
import { Product, Products} from "../models/product";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  Products = Products;

  constructor() { }

  ngOnInit(): void {
  }

  Orden = [
    {
      "orden": null,
      "nombre": "Destacados"
    },
    
    {
      "orden": "Ascendente",
      "nombre": "Precio menor a mayor"
    },
    {
      "orden": "Descendente",
      "nombre": "Precio mayor a menor"
    },
    
 

  ]
}
