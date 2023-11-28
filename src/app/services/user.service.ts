import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";
import {ApiResponse} from "../models/api-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  obtenerInformacionDeCuenta() {
    return this.httpClient.get<ApiResponse<User>>(environment.apiUrl + 'sesion/account/profile', {withCredentials: true})
  }

  registrarUsuario(data: any) {
    return this.httpClient.post<ApiResponse<User>>(environment.apiUrl + 'users', data)
  }

  listarUsuarios() {
    return this.httpClient.get<ApiResponse<User>>(environment.apiUrl + 'users')
  }

  getUsuario(id: number) {
    return this.httpClient.get<ApiResponse<User>>(environment.apiUrl + 'users/' + id)
  }

  registrarUsuarioAdm(data: any) {
    return this.httpClient.post<ApiResponse<User>>(environment.apiUrl + 'users/registrar', data)
  }

  actualizarUsuario(id: number, data: any) {
    return this.httpClient.post<ApiResponse<User>>(environment.apiUrl + 'users/' + id, data)
  }

  actualizarCliente( data: any) {
    return this.httpClient.post<ApiResponse<User>>(environment.apiUrl + 'sesion/account/profile/', data)
  }


  deshabilitarUsuario(id: number) {
    return this.httpClient.get<ApiResponse<User>>(environment.apiUrl + 'users/' + id + '/disable')
  }

  cambiarClave(id: number, data: any) {
    return this.httpClient.post<ApiResponse<User>>(environment.apiUrl + 'users/' + id + '/cambiarClave', data)
  }

  habilitarUsuario(id: number) {
    return this.httpClient.get<ApiResponse<User>>(environment.apiUrl + 'users/' + id + '/enable')
  }
}
