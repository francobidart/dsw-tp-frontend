import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  obtenerInformacionDeCuenta() {
    return this.httpClient.get(environment.apiUrl + 'account/profile', {withCredentials: true})
  }

  registrarUsuario(data: any) {
    return this.httpClient.post(environment.apiUrl + 'usuarios', data)
  }

  registrarUsuarioAdm(data: any) {
    return this.httpClient.post(environment.apiUrl + 'usuarios/registrar', data)
  }
}
