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

export class TODO {
  $key: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  progressInTime: AngularFirestoreCollection<{ time: string }>;
  items: Observable<Item[]>;
  uid = '';

  constructor(
    private readonly firestore: AngularFirestore,
    private authService: IonicAuthService,
    private storage: Storage,
    private dataConvertService: DataConvertService
  ) {
    storage.get('uid').then((uid) => {
      this.uid = uid;
      this.progressInTime = firestore.collection<{ time: string }>(
        `user/${uid}/progress-in-time`
      );
      this.firestore
        .doc(`user/${uid}/progress-in-time/meditation`)
        .get()
        .subscribe((doc) => {
          if (!doc.exists) {
            this.progressInTime.doc('meditation').set({ time: '00:00:00' });
          }
        });
    });
  }

  getHoursValue() {
    return this.storage.get('uid').then((uid) => {
      this.uid = uid;
      this.progressInTime = this.firestore.collection<{ time: string }>(
        `user/${uid}/progress-in-time`
      );
      return this.progressInTime
        .doc('meditation')
        .get()
        .pipe(
          map((data: DocumentSnapshot<{ time: string }>) => {
            return Number(data.data().time.split(':')[0]);
          })
        );
    });
  }

  update(time: string): void {
    this.progressInTime
      .doc('meditation')
      .get()
      .subscribe((data: DocumentSnapshot<{ time: string }>) => {
        const dbTimeValue = this.dataConvertService.getSeconds(
          data.data().time
        );
        const currentTimeValue = this.dataConvertService.getSeconds(time);
        const newTimeValue = this.dataConvertService.secondsToString(
          dbTimeValue + currentTimeValue
        );
        console.log(newTimeValue);
        this.progressInTime
          .doc('meditation')
          .update({ time: newTimeValue })
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
  //
  // getTask(id) {
  //   return this.firestore.collection('tasks').doc(id).valueChanges();
  // }
  //
  // update(id, todo: TODO) {
  //   this.ngFirestore
  //     .collection('tasks')
  //     .doc(id)
  //     .update(todo)
  //     .then(() => {
  //       this.router.navigate(['/todo-list']);
  //     })
  //     .catch((error) => console.log(error));
  // }
  //
  // delete(id: string) {
  //   this.ngFirestore.doc('tasks/' + id).delete();
  // }
}
