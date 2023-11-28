import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import {environment} from "../../environments/environment";
import {ApiResponse} from "../models/api-response";
import {TipoProducto} from "../models/tipo-producto";

@Injectable({
  providedIn: 'root'
})
export class TipoProductoServiceService {

  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'categories';
  }

  get() {
    return this.httpClient.get<ApiResponse<TipoProducto>>(environment.apiUrl + this.resourceUrl);
  }

  getById(id: number) {
    return this.httpClient.get<ApiResponse<TipoProducto>>(environment.apiUrl + this.resourceUrl + '/' + id);
  }

  create(data: any) {
    return this.httpClient.post<ApiResponse<any>>(environment.apiUrl + this.resourceUrl, data);
  }

  update(id: number, data: any) {
    return this.httpClient.post<ApiResponse<any>>(environment.apiUrl + this.resourceUrl + '/' + id + '/update', data);
  }

  delete(id: number) {
    return this.httpClient.get<ApiResponse<any>>(environment.apiUrl + this.resourceUrl + '/' + id + '/borrar');
  }
}
