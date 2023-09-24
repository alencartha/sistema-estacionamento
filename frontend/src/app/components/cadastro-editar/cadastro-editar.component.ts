import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Veiculo } from 'src/app/interfaces/veiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { PartialObserver, Subscribable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-editar',
  templateUrl: './cadastro-editar.component.html',
  styleUrls: ['./cadastro-editar.component.css']
})
export class CadastroEditarComponent implements OnInit, OnChanges {

  @Output() veiculoCadastrado = new EventEmitter<boolean>();

  @Output() veiculoAlterado = new EventEmitter<boolean>();
  

  @Input() resetForm: boolean = false
  @Input() veiculos: Veiculo[] = [];
  @Input() ehPesquisaInput: boolean = false

  formularioCadastro: FormGroup;
  formularioEditar: FormGroup;

  codigosVeiculos: Veiculo[] = []


  constructor(private veiculoService: VeiculosService, private formBuilder: FormBuilder) {

    this.formularioCadastro = this.formBuilder.group({
      tipo: [null, Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      cor: ['', Validators.required]
    });


    this.formularioEditar = this.formBuilder.group({
      codigo: [null, Validators.required],
      tipo: [null, Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      cor: ['', Validators.required]
    });



  }

  ngOnInit(): void {
    if (this.formularioEditar) {
      this.formularioEditar.get('codigo')?.valueChanges.subscribe((novoValor) => {
        this.buscarVeiculo(novoValor)
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['veiculos']?.currentValue && changes['ehPesquisaInput']?.currentValue == false) {
      this.codigosVeiculos = changes['veiculos'].currentValue
    }

    if (changes['resetForm']?.currentValue == true) {
      this.formularioEditar.reset()
    }
  }


  cadastrarVeiculo(form: any) {

    const veiculo = {
      tipo: form.tipo,
      modelo: form.modelo,
      placa: form.placa,
      cor: form.cor
    };

    this.veiculoService.cadastrarVeiculo(veiculo)
      .subscribe((response: any) => {

        if (response.result) {
          this.veiculoCadastrado.emit(true)
          this.formularioCadastro.reset()
        }

      }, error => {
        console.error('Error:', error);
      });
  }

  buscarVeiculo(codigo: string) {

    if (codigo) {
      this.veiculoService.buscarVeiculo(codigo).subscribe({
        next: (data: any) => {
          if (data.result) {
            this.formularioEditar.get('tipo')?.setValue(data.result.tipo);
            this.formularioEditar.get('modelo')?.setValue(data.result.modelo);
            this.formularioEditar.get('placa')?.setValue(data.result.placa);
            this.formularioEditar.get('cor')?.setValue(data.result.cor);
          }

        },
        error: (error: any) => {
          console.error('Ocorreu um erro ao buscar os dados:', error);
        }
      });
    }
  }


  editarVeiculo(form: any) {

    const veiculo = {
      codigo: form.codigo,
      tipo: form.tipo,
      modelo: form.modelo,
      placa: form.placa,
      cor: form.cor
    };

    this.veiculoService.editarVeiculo(veiculo)
      .subscribe((response: any) => {
        if (response.result) {
          this.veiculoAlterado.emit(true)
        }

      }, error => {
        console.error('Error:', error);
      });
  }


}
