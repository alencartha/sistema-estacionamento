import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelaComponent } from './components/tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroEditarComponent } from './components/cadastro-editar/cadastro-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    CadastroEditarComponent,
    DialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
