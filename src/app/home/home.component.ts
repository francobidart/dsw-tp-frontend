import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductoService} from "../services/producto.service";
import {Title} from "@angular/platform-browser";
import {ApiResponse} from "../models/api-response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Product[] = [];

  constructor(private productoService: ProductoService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('EL PATRÓN DEL HARD')
    this.productoService.get(4).subscribe({
      next: (res: ApiResponse<Product>) => this.Products = res.resultados
    });
  }

}
