import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculoCombustivelComponent } from './calculo-combustivel/calculo-combustivel.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculoCombustivelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
