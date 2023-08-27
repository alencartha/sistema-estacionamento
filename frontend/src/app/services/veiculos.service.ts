import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  cadastrarVeiculo(veiculo: any): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const params = new URLSearchParams();
    params.set('tipo', veiculo.tipo);
    params.set('modelo', veiculo.modelo);
    params.set('placa', veiculo.placa);
    params.set('cor', veiculo.cor);

    return this.http.post(`${this.url}/veiculo`, params.toString(), { headers });
  }

}
