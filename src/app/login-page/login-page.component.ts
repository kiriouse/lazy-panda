import {Component, OnInit} from '@angular/core';
// import '@codetrix-studio/capacitor-google-auth';
// import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userInfo = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  // async googleSignup() {
  //   const googleUser = await Plugins.GoogleAuth.signIn();
  //   console.log(googleUser);
  //
  //   this.userInfo = googleUser;
  // }

}
