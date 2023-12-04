// vuelo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private apiUrl = 'http://localhost:4000/api/vuelos';

  constructor(private http: HttpClient) { }

  obtenerVuelos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
