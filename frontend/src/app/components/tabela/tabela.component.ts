import { Component, Input, Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Veiculo } from 'src/app/interfaces/veiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';



@Component({
	selector: 'app-tabela',
	templateUrl: './tabela.component.html',
	styleUrls: ['./tabela.component.css']
})

export class TabelaComponent implements OnInit, OnChanges {

	@Input() veiculos: Veiculo[] = [];
	@Input() ehInclusaoVeiculo: boolean = false

	@Output() veiculoDeletado = new EventEmitter<boolean>();


	page = 1;
	pageSize = 4;

	constructor(public dialog: MatDialog, private veiculoService: VeiculosService) {

	}

	ngOnInit(): void {

	}


	ngOnChanges(changes: SimpleChanges): void {

		if (changes['veiculos']) {
			this.veiculos = changes['veiculos'].currentValue;

		}

		if (changes['ehInclusaoVeiculo']?.currentValue == true) {
			this.pageChange(this.getTotalPages())
		}


	}


	//paginacao

	pageChange(newPage: number) {
		this.page = newPage;
	}

	get collection(): number {
		return this.veiculos.length;
	}

	get veiculosPaginados(): any[] {
		const startIndex = (this.page - 1) * this.pageSize;
		return this.veiculos.slice(startIndex, startIndex + this.pageSize);
	}

	getTotalPages(): number {
		return Math.ceil(this.veiculos.length / this.pageSize);
	}

	//dialog exclusao

	openDialog(veiculo: Veiculo) {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '400px',
			height: '200px',
			data: veiculo
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result === 'fechar') {
				console.log('Diálogo foi fechado');
			} else if (result === 'confirmar') {
				this.deletarVeiculo(veiculo.codigo)
			} else {
				console.log('Resultado desconhecido:', result);
			}
		});
	}


	deletarVeiculo(codigo: any) {

		this.veiculoService.deletarVeiculo(codigo).subscribe({
			next: (data: any) => {
				if (data.result) {
					this.veiculoDeletado.emit(true)
				}

			},
			error: (error: any) => {
				console.error('Ocorreu um erro ao deletar os dados:', error);
			}
		});
	}


}
