import { Component, OnInit } from '@angular/core';
import { VeiculosService } from './services/veiculos.service';
import { Veiculo } from './interfaces/veiculo';


interface Carro {
  codigo?: number;
  modelo: string;
  cor: string;
  placa: string;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Sistema Estacionamento';
  veiculos: Veiculo[] = [];



  constructor(private veiculosService: VeiculosService) {
  }

  ngOnInit(): void {
    this.buscarVeiculos()
  }

  veiculoCadastradoAlterado(event: boolean) {
    if (event) {
      this.buscarVeiculos()
    }
  }


  buscarVeiculos() {
    this.veiculosService.buscarVeiculos().subscribe({
      next: (data: any) => {
        this.veiculos = data.result;
      },
      error: (error: any) => {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      }
    });
  }


}
