import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationStart, Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  constructor(
    private menu: MenuController,
    private router: Router,
    private ionicAuthService: IonicAuthService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.menu.close('main');
      }
    });
  }

  signOut() {
    this.ionicAuthService
      .signoutUser()
      .then((res) => {
        this.router.navigateByUrl('login');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
