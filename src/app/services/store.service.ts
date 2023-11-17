import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) {
  }

  getSucursales() {
    return this.httpClient.get(environment.apiUrl + 'sucursales');
  }

  getSucursal(id: number) {
    return this.httpClient.get(environment.apiUrl + 'sucursales/' + id);
  }

  crearSucursal(data: any) {
    return this.httpClient.post(environment.apiUrl + 'sucursales', data);
  }

  editarSucursal(id: number, data: any) {
    return this.httpClient.post(environment.apiUrl + 'sucursales/' + id, data);
  }

  disableStore(id: number) {
    return this.httpClient.get(environment.apiUrl + 'sucursales/' + id + '/disable')
  }

  enableStore(id: number) {
    return this.httpClient.get(environment.apiUrl + 'sucursales/' + id + '/enable')
  }

  getMediosDePago() {
    return this.httpClient.get(environment.apiUrl + 'mediopago');
  }

  getMedioDePago(id: number) {
    return this.httpClient.get(environment.apiUrl + 'mediopago/' + id);
  }

  crearMedioDePago(data: any) {
    return this.httpClient.post(environment.apiUrl + 'mediopago', data);
  }

  editarMedioDePago(id: number, data: any) {
    return this.httpClient.post(environment.apiUrl + 'mediopago/' + id, data);
  }

  disableMedioDePago(id: number) {
    return this.httpClient.get(environment.apiUrl + 'mediopago/' + id + '/disable')
  }

  enableMedioDePago(id: number) {
    return this.httpClient.get(environment.apiUrl + 'mediopago/' + id + '/enable')
  }

}
