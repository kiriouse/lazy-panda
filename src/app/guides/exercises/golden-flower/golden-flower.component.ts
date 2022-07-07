import { Component } from '@angular/core';

@Component({
  selector: 'app-golden-flower',
  templateUrl: 'golden-flower.component.html',
  styleUrls: ['golden-flower.component.scss']
})
export class GoldenFlowerComponent {

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
