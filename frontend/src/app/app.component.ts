import { Component } from '@angular/core';


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
export class AppComponent {
  title = 'Sistema Estacionamento';
  constructor() {
  }

 
}
