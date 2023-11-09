import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private httpClient: HttpClient) {
  }
http: any;

registrarUsuario(datosRegistro: any) {
  return this.http.post('http://localhost:3000/' + '/usuarios', datosRegistro);
}

}
