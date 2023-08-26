import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  url: string = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  buscarVeiculos(): Observable<any> {
    return this.http.get(`${this.url}/veiculos`);
  }
}
