// search.component.ts
import {Component} from '@angular/core';
import {BuscarService} from '../services/buscar/buscar.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  resultados: any[] = [];

  constructor(private buscarService: BuscarService, private router: Router) {
  }

  buscar() {
    if (this.query !== '') {
      this.router.navigate(['resultados'], {queryParams: {q: this.query}});
      this.query = ''
    }
  }
}
