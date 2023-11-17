import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginStatusService} from "../login-status.service";

@Injectable({
  providedIn: 'root'
})
export class ActivateAdminGuard implements CanActivate {

  constructor(private loginStatus: LoginStatusService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginStatus.validarAdmin().then((res: any) => {
      return true;
    }).catch((error) => {
      this.loginStatus.logout();
      this.router.navigate(['no-autorizado'])
      return false;
    })
  }
}
