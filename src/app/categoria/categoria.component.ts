import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {TipoProductoServiceService} from "../services/tipo-producto-service.service";
import {ApiResponse} from "../models/apiResponse";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../services/producto.service";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  Products: any = [];
  Category: string = ''
  CategoryId: number | null = null;

  constructor(private tipoProductoService: TipoProductoServiceService, private route: ActivatedRoute, private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.loadData(routeParams['id']);
    });
  }

  loadData(id: number) {
    this.CategoryId = id;
    if (this.CategoryId) {
      this.tipoProductoService.getById(this.CategoryId).subscribe((res: any) => this.Category = (res.total_resultados > 0) ? res.resultados[0].nombre : '');
      this.productoService.getByCategory(this.CategoryId).subscribe((res:any) => this.Products = res.resultados);
    }
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
    }
  ]

}
