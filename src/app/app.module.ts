import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerStockComponent } from './beer-stock/beer-stock.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { AlcoholnessPipe } from './alcoholness.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BeerStockComponent,
    NewKegComponent,
    EditBeerComponent,
    AlcoholnessPipe
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
