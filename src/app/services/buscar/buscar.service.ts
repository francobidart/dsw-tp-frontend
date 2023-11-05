import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  constructor(private http: HttpClient) {}

  buscar(query: string): Observable<any> {
    return this.http.get ( environment.apiUrl+`products/search/?q=${query}`);
  }
}
