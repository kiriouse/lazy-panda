import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat';
import User = firebase.User;
import { Observable } from 'rxjs';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root',
})
export class IonicAuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res: UserCredential) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth
          .signOut()
          .then(() => {
            console.log('Sign out');
            resolve();
          })
          .catch(() => {
            reject();
          });
      }
    });
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.angularFireAuth.user.pipe(map((user: User) => !Boolean(user)));
  }

  userInfo() {
    return this.angularFireAuth.user;
  }
}
