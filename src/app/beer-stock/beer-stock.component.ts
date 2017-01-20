import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-beer-stock',
  templateUrl: './beer-stock.component.html'
})

export class BeerStockComponent {
  @Input() childBeerStock: Keg[];
  @Output() saleSender = new EventEmitter();
  @Output() kegSendToEdit = new EventEmitter();
  filterByAlcoholness: string = "allAlcohols";

  onChange(optionFromMenu) {
  this.filterByAlcoholness = optionFromMenu;
}

  priceColor(currentKeg) {
    if (currentKeg.price <= 2) {
      return "bg-primary";
    } else if (currentKeg.price > 2 && currentKeg.price <= 4) {
      return "bg-warning";
    } else if (currentKeg.price > 4) {
      return "bg-success";
    }
  }

  editButton(selectedKeg) {
    this.kegSendToEdit.emit(selectedKeg);
  }

  sendSale(currentKeg) {
    this.saleSender.emit(currentKeg);
  }

}
