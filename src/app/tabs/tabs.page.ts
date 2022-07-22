import { Component } from '@angular/core';
import { IonicAuthService } from '../shared/services/ionic-auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  isUserLoggedIn = this.authService.isUserLoggedIn();

  constructor(private authService: IonicAuthService) {}
}
