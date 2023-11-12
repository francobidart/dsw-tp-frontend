import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../services/buscar/buscar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']

})
export class ResultadosComponent implements OnInit {

  query: string = '';
  resultados: any[] = [];

  constructor(private buscarService: BuscarService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.query = params['q'];

        this.buscar()
      }
    );}

  buscar() {
    this.buscarService.buscar(this.query).subscribe(data => {
      this.resultados = data.resultados;
    });
  }

  imgError(event: any) {
    event.target.src = "/assets/img/not-found.png";
  }
}
