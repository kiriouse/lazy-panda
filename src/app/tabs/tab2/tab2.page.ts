import {Component, OnInit} from '@angular/core';
// import '@codetrix-studio/capacitor-google-auth';
import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  userInfo = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn();
    console.log(googleUser);

    this.userInfo = googleUser;

  }

}
