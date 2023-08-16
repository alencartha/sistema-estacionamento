import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule,
     NgbPaginationModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
