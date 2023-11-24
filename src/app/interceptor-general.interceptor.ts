import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, Observable} from 'rxjs';
import {LoaderService} from "./services/loader-service.service";
@Injectable()
export class InterceptorGeneralInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.mostrarCargando();
    request = request.clone({
      withCredentials: true
    })
    return next.handle(request).pipe(
        finalize(() => {
          this.loaderService.ocultarCargando();
        })
    );
  }
}
