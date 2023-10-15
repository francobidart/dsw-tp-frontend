import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getSucursales() {
    return this.httpClient.get(environment.apiUrl + 'sucursales');
  }

  getMediosDePago() {
    return this.httpClient.get(environment.apiUrl + 'mediopago');
  }
}
