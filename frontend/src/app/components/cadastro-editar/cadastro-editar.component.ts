import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veiculo } from 'src/app/interfaces/veiculo';
import { VeiculosService } from 'src/app/services/veiculos.service';
import { PartialObserver, Subscribable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-editar',
  templateUrl: './cadastro-editar.component.html',
  styleUrls: ['./cadastro-editar.component.css']
})
export class CadastroEditarComponent {

  @Output() veiculoCadastradoAlterado = new EventEmitter<boolean>();
  @Input() veiculos: Veiculo[] = [];
  formularioCadastro: FormGroup;
 

  constructor(private veiculoService: VeiculosService, private formBuilder: FormBuilder) {

    this.formularioCadastro = this.formBuilder.group({
      tipo: [null, Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      cor: ['', Validators.required]
    });

  }


  cadastrarVeiculo(form: any) {

    const veiculo = {
      tipo: form.tipo,
      modelo: form.modelo,
      placa: form.placa,
      cor: form.cor
    };

    this.veiculoService.cadastrarVeiculo(veiculo)
      .subscribe((response:any) => {

        if (response.result){
          this.veiculoCadastradoAlterado.emit(true)
          this.formularioCadastro.reset()
        }
       
      }, error => {
        console.error('Error:', error);
      });
  }

}
