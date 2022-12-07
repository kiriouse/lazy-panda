import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../shared/services/ionic-auth.service';
import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  isUserLoggedIn = of(false);

  constructor(private authService: IonicAuthService) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
  }
}
