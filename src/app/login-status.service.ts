import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  public isAuthenticated: boolean = false;
  public errorMessage: string | null = null;

  constructor(private httpClient: HttpClient) {
  }

  // Método para iniciar sesión
  login(username: string, password: string, callback: any = null) {
    this.errorMessage = null;
    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);
    this.httpClient.post(environment.apiUrl + 'login', formData, {withCredentials: true})
      .subscribe(
        (res: any) => {
          this.isAuthenticated = true;
          if (callback) {
            callback()
          }
        },

        (err: any) => this.errorMessage = err.error.mensaje
      );
  }


  validarSesion(callback: any = null) {
    this.httpClient.get(environment.apiUrl + 'session/validateSession', {withCredentials: true})
      .subscribe((res: any) => {
        this.isAuthenticated = true;
        if (callback !== null) {
          callback()
        }
      }, (err: any) => {
        this.isAuthenticated = false;
        if (callback !== null) {
          callback()
        }
      })
  }

// Método para cerrar sesión
  logout(): void {
    this.httpClient.get(environment.apiUrl + 'logout', {withCredentials: true}).subscribe(
      (res: any) => {
        this.isAuthenticated = false;
      }
    )
  }

// Método para verificar el estado de inicio de sesión
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
