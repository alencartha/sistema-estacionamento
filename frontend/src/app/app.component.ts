import { Component } from '@angular/core';


interface Carro {
  codigo?: number;
  modelo: string;
  cor: string;
  placa: string;
}

const cars: Carro[] = [
  {
    codigo: 1,
    modelo: 'Toyota Corolla',
    cor: 'Azul',
    placa: 'ABC123',
  },
  {
    codigo: 2,
    modelo: 'Honda Civic',
    cor: 'Prata',
    placa: 'DEF456',
  },
  {
    codigo: 3,
    modelo: 'Ford Mustang',
    cor: 'Vermelho',
    placa: 'GHI789',
  },
  {
    codigo:4,
    modelo: 'Volkswagen Golf',
    cor: 'Branco',
    placa: 'JKL012',
  },
  {
    modelo: 'Chevrolet Camaro',
    cor: 'Preto',
    placa: 'MNO345',
  },
  // ... adicione mais carros se necessário
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sistema Estacionamento';

  page = 1;
  pageSize = 4;
  collectionSize = cars.length;
  cars?: Carro[];

  constructor() {
    this.refreshCars();
  }

  refreshCars() {
    this.cars = cars.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
