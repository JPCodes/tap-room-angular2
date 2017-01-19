import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerStockComponent } from './beer-stock/beer-stock.component';
import { NewKegComponent } from './new-keg/new-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerStockComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
