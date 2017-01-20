import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg';

@Pipe({
  name: 'alcoholness',
  pure: false
})

export class AlcoholnessPipe implements PipeTransform {

  transform(input: Keg[], alcoholFilter){
    var output: Keg[] = [];
    if(alcoholFilter === "mod alcohol"){
      for (var i = 0; i < input.length; i++) {
        if(input[i].alcoholContent > 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (alcoholFilter === "low alcohol") {

      for (var i = 0; i < input.length; i++) {
        if(input[i].alcoholContent <= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
