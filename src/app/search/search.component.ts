// search.component.ts
import { Component } from '@angular/core';
import { BuscarService } from '../services/buscar/buscar.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  resultados: any[] = [];

  constructor(private buscarService: BuscarService) {}

  buscar() {
    this.buscarService.buscar(this.query).subscribe(data => {
      this.resultados = data;
    });
  }
}
