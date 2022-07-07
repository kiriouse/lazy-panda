import { Component } from '@angular/core';

@Component({
  selector: 'app-six-healing-sounds',
  templateUrl: 'six-healing-sounds.component.html',
  styleUrls: ['six-healing-sounds.component.scss']
})
export class SixHealingSoundsComponent {

  constructor() {}

  showStageOne = false;
  showStageTwo = false;
  showStageThree = false;

  onHeaderClick(header: string) {
    switch (header) {
      case 'showStageOne':
        this.showStageOne = !this.showStageOne;
        break;
      case 'showStageTwo':
        this.showStageTwo = !this.showStageTwo;
        break;
      case 'showStageThree':
        this.showStageThree = !this.showStageThree;
        break;
    }
  }
}
