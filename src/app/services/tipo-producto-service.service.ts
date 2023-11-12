import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TipoProductoServiceService {

  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'categories';
  }

  get() {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl);
  }

  getById(id: number) {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/' + id);
  }

  create(data: any) {
    return this.httpClient.post(environment.apiUrl + this.resourceUrl, data);
  }

  update(id: number, data: any) {
    return this.httpClient.post(environment.apiUrl + this.resourceUrl + '/' + id + '/update', data);
  }

  delete(id: number) {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/' + id + '/borrar');
  }
}
