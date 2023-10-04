import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'products';
  }

  get(limit: number|null = null) {
    let query = (limit !== null) ? '?limit=' + limit : '';
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + query);
  }

  getByCategory(categoryId: number) {
    return this.httpClient.get(environment.apiUrl + 'categories/' + categoryId + '/products');
  }

  getById(id: number) {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/' + id);
  }
}
