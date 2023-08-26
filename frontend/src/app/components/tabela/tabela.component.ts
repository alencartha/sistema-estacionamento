import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/interfaces/veiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';



@Component({
	selector: 'app-tabela',
	templateUrl: './tabela.component.html',
	styleUrls: ['./tabela.component.css']
})

export class TabelaComponent implements OnInit {

	
	veiculos: Veiculo[] = [];
	page = 1;
    pageSize = 4;
    collectionSize = 0; 

	constructor(private veiculosService: VeiculosService) {

	}

	ngOnInit(): void {
		this.buscarVeiculos()
	}



	buscarVeiculos() {
		this.veiculosService.buscarVeiculos().subscribe({
			next: (data: any) => {
				this.veiculos = data.result;
				this.collectionSize = this.veiculos.length;
			},
			error: (error: any) => {
				console.error('Ocorreu um erro ao buscar os dados:', error);
			}
		});
	}





	//paginacao

	 veiculosParaExibir(): Veiculo[] {
        const startIndex = (this.page - 1) * this.pageSize;
        return this.veiculos.slice(startIndex, startIndex + this.pageSize);
    }


    pageChange(newPage: number) {
        this.page = newPage;
    }

}
