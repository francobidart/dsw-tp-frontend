import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../services/loader-service.service";

@Component({
  selector: 'app-cargando-component',
  templateUrl: './cargando-component.component.html',
  styleUrls: ['./cargando-component.component.css']
})
export class CargandoComponentComponent implements OnInit {
  cargando = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.cargando$.subscribe((cargando) => {
      this.cargando = cargando;
    });
  }
}
