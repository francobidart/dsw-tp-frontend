import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductoService} from "../services/producto.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: any = null;

  constructor(private productoService: ProductoService) {
  }

  ngOnInit(): void {
    this.productoService.get(4).subscribe((res: any) => this.Products = res.resultados);
  }

}
