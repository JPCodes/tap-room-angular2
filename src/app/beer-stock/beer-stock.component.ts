import { Component } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-beer-stock',
  templateUrl: './beer-stock.component.html'
})

export class BeerStockComponent {
  kegs : Keg[] = [
    new Keg('Ambar', 'Dos Equis', 2.99, 4.7, 1.5),
    new Keg('Epicenter Amber', 'SanTan', 3.49, 5.5, 1),
    new Keg('American Lager', 'Pabst Blue Ribbon', 1.49, 4.7, 4),
    new Keg('Total Domination', 'Ninkasi', 3.49, 6.7, 3)
  ]
}
