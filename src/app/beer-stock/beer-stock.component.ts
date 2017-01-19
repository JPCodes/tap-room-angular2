import { Component, Input } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-beer-stock',
  templateUrl: './beer-stock.component.html'
})

export class BeerStockComponent {
  @Input() childBeerStock: Keg[];

  priceColor(currentKeg) {
    if (currentKeg.price <= 2) {
      return "bg-primary";
    } else if (currentKeg.price > 2 && currentKeg.price <= 4) {
      return "bg-warning";
    } else if (currentKeg.price > 4) {
      return "bg-success";
    }
  }

  sellPint(currentKeg, amount) {
    console.log('clicked');
    return currentKeg.pints - amount;
  }
}
