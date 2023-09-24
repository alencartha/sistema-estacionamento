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
  ehPesquisaInput: boolean = true
  inputModificado: boolean = false
  ehInclusaoVeiculo: boolean = false


  constructor(private veiculosService: VeiculosService) {
  }

  ngOnInit(): void {
    this.buscarVeiculos()
  }

  veiculoCadastradoAlterado(event: boolean) {
    if (event) {
      this.buscarVeiculos()
      this.ehInclusaoVeiculo = true
    }
  }



  buscarVeiculos() {

    this.ehPesquisaInput = true
    this.veiculosService.buscarVeiculos().subscribe({
      next: (data: any) => {
        this.veiculos = data.result;
        if (data && !this.inputModificado) {
          this.ehPesquisaInput = false
        }
      },
      error: (error: any) => {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      }
    });
  }


  buscarVeiculo(codigo: string) {

    this.ehPesquisaInput = true
    this.inputModificado = true

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
