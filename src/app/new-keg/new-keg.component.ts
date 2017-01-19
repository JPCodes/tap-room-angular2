import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html'
})
export class NewKegComponent  {
  @Output() newKegSender = new EventEmitter();
  submitForm(name: string, brand: string, price: number, alcoholContent: number, remainingKegs: number, remainingPints: number) {

    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, remainingKegs, remainingPints);
    this.newKegSender.emit(newKegToAdd);
  }
}
