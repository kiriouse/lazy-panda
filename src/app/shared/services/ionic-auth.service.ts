import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat';
import User = firebase.User;
import { BehaviorSubject, Observable } from 'rxjs';
import UserCredential = firebase.auth.UserCredential;
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class IonicAuthService {
  uuid = '';

  constructor(
    private angularFireAuth: AngularFireAuth,
    private storage: Storage
  ) {}

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
            this.uuid = res.user.uid;
            this.storage.set('uid', res.user.uid);
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
            this.storage.clear();
            resolve();
          })
          .catch(() => {
            reject();
          });
      }
    });
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.angularFireAuth.user.pipe(
      map((user: User) => {
        console.log(Boolean(user));
        return Boolean(user);
      })
    );
  }

  userInfo() {
    return this.angularFireAuth.user;
  }
}
