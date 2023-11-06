import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'pedidos';
  }

  getPedido(id: number) {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/' + id, {withCredentials: true});
  }

  getPedidos() {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl, {withCredentials: true});
  }

  entregarPedido(id: number) {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/entregar/' + id, {withCredentials: true})
  }

  cancelarPedido(id: number) {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/cancelar/' + id, {withCredentials: true})
  }

  getPedidosPendientes() {
    return this.httpClient.get(environment.apiUrl + this.resourceUrl + '/stats', {withCredentials: true});
  }

  getPedidoClient(){
    return this.httpClient.get(environment.apiUrl + this.resourceUrl,{withCredentials: true})
  }
}
