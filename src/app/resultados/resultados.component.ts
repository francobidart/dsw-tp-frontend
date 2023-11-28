import {Component, OnInit} from '@angular/core';
import {BuscarService} from '../services/buscar/buscar.service';
import {ActivatedRoute} from '@angular/router';
import {ApiResponse} from "../models/api-response";
import {Product} from "../models/product";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']

})
export class ResultadosComponent implements OnInit {

  query: string = '';
  resultados: Product[] = [];

  constructor(private buscarService: BuscarService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.buscar()
    });
  }

  buscar() {
    this.buscarService.buscar(this.query).subscribe({
      next: (data: ApiResponse<Product>) => {
        this.resultados = data.resultados;
      }
    });
  }
}
