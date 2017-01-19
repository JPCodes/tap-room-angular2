import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html'
})

export class EditBeerComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickSender = new EventEmitter();

  doneEditingClicked() {
    this.doneButtonClickSender.emit();
  }

}
