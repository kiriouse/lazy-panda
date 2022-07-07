import {Component} from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
  }

  showExercisesList = false;


  exercises: { name: string; url: string }[] = [
    {name: 'Медитация Золотого цветка', url: '/dic/golden-flower'},
    {name: 'Шесть целительных звуков', url: '/dic/six-healing-sounds'}];

  onHeaderClick(header: string) {
    switch (header) {
      case 'showExercisesList':
        this.showExercisesList = !this.showExercisesList;
        break;
    }
  }
}
