import { Component, OnInit } from '@angular/core';
import { VeiculosService } from './services/veiculos.service';
import { Veiculo } from './interfaces/veiculo';



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

  teste(n: any) {
    console.log(n)
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


  buscarVeiculo(codigo: string) {

    if (codigo) {
      this.veiculosService.buscarVeiculo(codigo).subscribe({
        next: (data: any) => {
          if (data.result) {
            this.veiculos = [data.result];
          } 

        },
        error: (error: any) => {
          console.error('Ocorreu um erro ao buscar os dados:', error);
        }
      });
    } else {
      this.buscarVeiculos()
    }

  }


}
