import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IonicAuthService } from '../shared/services/ionic-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: 'registration-page.component.html',
  styleUrls: ['registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';

  errorMessage = {
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
    private fb: FormBuilder
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

  signUp(value) {
    this.ionicAuthService.createUser(value).then(
      (response) => {
        this.errorMsg = '';
        this.successMsg = 'New user created.';
      },
      (error) => {
        this.errorMsg = error.message;
        this.successMsg = '';
      }
    );
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
