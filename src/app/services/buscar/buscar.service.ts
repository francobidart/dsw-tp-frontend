import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  constructor(private http: HttpClient) {}

  buscar(query: string): Observable<any> {
    return this.http.get(`/api/buscar?q=${query}`);
  }
}
