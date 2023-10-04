import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
        } else {
          if(error.status === 0) {
            this.router.navigate(['server-unavailable'])
          }
        }
        return throwError(errorMessage);
      })
    );
  }
}
