import { Component } from '@angular/core';
import { Keg } from './keg';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  selectedKeg = null;

  masterBeerStock : Keg[] = [
    new Keg('Ambar', 'Dos Equis', 2.99, 4.7, 2, 62),
    new Keg('Epicenter Amber', 'SanTan', 3.49, 5.5, 1, 124),
    new Keg('American Lager', 'Pabst Blue Ribbon', 1.49, 4.7, 4, 124),
    new Keg('Total Domination', 'Ninkasi', 3.49, 6.7, 3, 124),
    new Keg('Hoppy Bunny Aba', 'The Duck-Rabbit', 4.79, 7.3, 2, 124)
  ];

  addKeg(newKegFromChild: Keg) {
    this.masterBeerStock.push(newKegFromChild);
  }

  sellPint(currentKeg) {
    currentKeg.remainingPints -= 1;
    if (currentKeg.remainingPints === 0) {
      currentKeg.remainingKegs -= 1;
      currentKeg.remainingPints = 124;
    }

    if (currentKeg.remainingPints === 60 && currentKeg.remainingKegs === 0) {
      alert('Iono just be like "oh no! exclamation mark." Time to stock up!');
    }
  }

  editBeer(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }


}
