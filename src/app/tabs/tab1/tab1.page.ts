import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../../shared/services/ionic-auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  showExercisesList = false;

  isAuthorized: Observable<boolean>;

  exercises: { name: string; url: string }[] = [
    { name: 'Медитация Золотого цветка', url: '/dic/golden-flower' },
    { name: 'Шесть целительных звуков', url: '/dic/six-healing-sounds' },
  ];

  constructor(private authService: IonicAuthService) {}

  ngOnInit(): void {
    this.isAuthorized = this.authService.isUserLoggedIn();
  }

  onHeaderClick(header: string) {
    switch (header) {
      case 'showExercisesList':
        this.showExercisesList = !this.showExercisesList;
        break;
    }
  }
}
