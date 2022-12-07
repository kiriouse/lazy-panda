import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicAuthService } from '../shared/services/ionic-auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  error_msg = {
    email: [
      {
        type: 'required',
        message: 'Provide email.',
      },
      {
        type: 'pattern',
        message: 'Email is not valid.',
      },
    ],
    password: [
      {
        type: 'required',
        message: 'Password is required.',
      },
      {
        type: 'minlength',
        message: 'Password length should be 6 characters long.',
      },
    ],
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(6), Validators.required])
      ),
    });
  }

  signIn(value) {
    this.ionicAuthService.signinUser(value).then(
      () => {
        this.router.navigateByUrl('/tabs/tab2');
      },
      (error) => {
        this.errorMsg = error.message;
        this.successMsg = '';
      }
    );
  }

  goToSignup() {
    this.router.navigateByUrl('registration');
  }
}
