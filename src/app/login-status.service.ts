import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {User} from './models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  public isAuthenticated: boolean = false;
  public errorMessage: string | null = null;
  public isAdmin: boolean = false;
  http: any;

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string, callback: any = null) {
    this.errorMessage = null;
    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);
    this.httpClient.post(environment.apiUrl + 'sesion/login', formData, {withCredentials: true})
      .subscribe({
        next: (res: any) => {
          this.isAuthenticated = true;
          this.isAdmin = res.resultados.isAdmin;
          if (callback) {
            callback()
          }
        },
        error: (err: any) => this.errorMessage = err.error.mensaje
      });
  }


  validarSesion(callback: any = null) {
    this.httpClient.get(environment.apiUrl + 'sesion/session/validateSession', {withCredentials: true})
      .subscribe({
        next: (res: any) => {
          this.isAuthenticated = true;
          this.isAdmin = res.resultados.isAdmin;
          if (callback !== null) {
            callback()
          }
        },
        error: (err: any) => {
          this.isAuthenticated = false;
          if (callback !== null) {
            callback()
          }
        }
      })
  }

  validarAdmin() {
    return this.httpClient.get(environment.apiUrl + 'sesion/session/validateAdmin', {withCredentials: true}).toPromise();
  }

  logout(): void {
    this.httpClient.get(environment.apiUrl + 'sesion/logout', {withCredentials: true}).subscribe({
      next: (res: any) => {
        this.isAuthenticated = false;
        this.isAdmin = false;
      }
    })
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getPerfil(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'sesion/account/profile');
  }

}
