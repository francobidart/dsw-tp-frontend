import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  public isAuthenticated: boolean = false;

constructor() { }


// Método para cerrar sesión
logout(): void {
this.isAuthenticated = false;
}

// Método para verificar el estado de inicio de sesión
isLoggedIn(): boolean {
return this.isAuthenticated;
}
}