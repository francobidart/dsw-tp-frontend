import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private cargandoSubject = new BehaviorSubject<boolean>(false);
  cargando$: Observable<boolean> = this.cargandoSubject.asObservable();

  mostrarCargando() {
    this.cargandoSubject.next(true);
  }

  ocultarCargando() {
    this.cargandoSubject.next(false);
  }
}
