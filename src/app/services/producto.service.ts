import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiResponse} from "../models/api-response";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'products';
  }

  get(limit: number | null = null) {
    let query = (limit !== null) ? '?limit=' + limit : '';
    return this.httpClient.get<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl + query);
  }

  getDisabled(limit: number | null = null) {
    let query = (limit !== null) ? '?limit=' + limit : '';
    return this.httpClient.get<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl + '/disabled' + query);
  }

  getByCategory(categoryId: number, orden: string | null = null) {
    let order = orden ? '?order=' + orden : '';
    return this.httpClient.get<ApiResponse<Product>>(environment.apiUrl + 'categories/' + categoryId + '/products' + order);
  }

  getById(id: number) {
    return this.httpClient.get<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl + '/' + id);
  }

  createProducto(data: any) {
    return this.httpClient.post<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl, data)
  }

  updateProducto(id: number, data: any) {
    return this.httpClient.post<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl + '/' + id, data)
  }

  enableProducto(id: number | null) {
    return this.httpClient.get<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl + '/' + id + '/enable');
  }

  disableProducto(id: number | null) {
    return this.httpClient.get<ApiResponse<Product>>(environment.apiUrl + this.resourceUrl + '/' + id + '/disable');
  }
}
