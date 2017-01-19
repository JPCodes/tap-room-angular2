import { Component } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-beer-stock',
  templateUrl: './beer-stock.component.html'
})

export class BeerStockComponent {
  kegs : Keg[] = [
    new Keg('Ambar', 'Dos Equis', 2.99, 4.7, 2, 62),
    new Keg('Epicenter Amber', 'SanTan', 3.49, 5.5, 1, 124),
    new Keg('American Lager', 'Pabst Blue Ribbon', 1.49, 4.7, 4, 124),
    new Keg('Total Domination', 'Ninkasi', 3.49, 6.7, 3, 124),
    new Keg('Hoppy Bunny Aba', 'The Duck-Rabbit', 4.79, 7.3, 2, 124)
  ]

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
