import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import Item = firebase.analytics.Item;
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IonicAuthService } from './ionic-auth.service';
import { Storage } from '@ionic/storage';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import { DataConvertService } from './data-convert.service';
import { map } from 'rxjs/operators';

interface Time {
  time: number;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  progressInTime: AngularFirestoreCollection<Time>;
  items: Observable<Item[]>;
  uid = '';

  constructor(
    private readonly firestore: AngularFirestore,
    private authService: IonicAuthService,
    private storage: Storage
  ) {
    storage.get('uid').then((uid) => {
      this.uid = uid;
      this.progressInTime = firestore.collection<Time>(
        `user/${uid}/progress-in-time`
      );
      this.firestore
        .doc(`user/${uid}/progress-in-time/meditation`)
        .get()
        .subscribe((doc) => {
          if (!doc.exists) {
            this.progressInTime.doc('meditation').set({ time: 0, count: 0 });
          }
        });

      this.firestore
        .doc(`user/${uid}/progress-in-time/stand`)
        .get()
        .subscribe((doc) => {
          if (!doc.exists) {
            this.progressInTime.doc('stand').set({ time: 0, count: 0 });
          }
        });
    });
  }

  getHoursValue(typeOfActivity: string) {
    return this.storage.get('uid').then((uid) => {
      this.uid = uid;
      this.progressInTime = this.firestore.collection<Time>(
        `user/${uid}/progress-in-time`
      );
      return this.progressInTime
        .doc(typeOfActivity)
        .get()
        .pipe(
          map((data: DocumentSnapshot<Time>) => {
            return data.data()?.time && data.data()?.time / 60 / 60 > 1
              ? Math.floor(data.data().time / 60 / 60)
              : 0;
          })
        );
    });
  }

  getCountValue(practiceType, uuid) {
    return this.storage.get('uid').then((uid) => {
      this.uid = uid;
      if (uuid) {
        this.progressInTime = this.firestore.collection<Time>(
          `user/${uuid}/progress-in-time`
        );
      } else {
        this.progressInTime = this.firestore.collection<Time>(
          `user/${uid}/progress-in-time`
        );
      }

      return this.progressInTime
        .doc(practiceType)
        .get()
        .pipe(
          map((data: DocumentSnapshot<Time>) => {
            return data.data().count ? data.data().count : 0;
          })
        );
    });
  }

  update(seconds: number, practiceType: string): void {
    this.progressInTime
      .doc(practiceType)
      .get()
      .subscribe((data: DocumentSnapshot<Time>) => {
        const dbTimeValue = data.data().time;
        const dbCountValue = data.data().count;
        const newTimeValue = dbTimeValue + seconds;
        let newCountValue = dbCountValue;
        // if (seconds > 300) {
        newCountValue ? newCountValue++ : (newCountValue = 1);
        // }

        this.progressInTime
          .doc(practiceType)
          .update({ time: newTimeValue, count: newCountValue })
          .then(
            () => console.log('success'),
            (err) => console.log(err)
          );
      });
  }

  getCollection(docPath) {
    return this.firestore
      .collection(`user/${this.uid}/progress-in-time`)
      .doc(`user/${this.uid}/progress-in-time/${docPath}`);
  }
}
