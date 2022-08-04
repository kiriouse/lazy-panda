import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { CrudService } from '../../services/crud.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(
    private crudService: CrudService,
    private cdr: ChangeDetectorRef
  ) {}

  count: Observable<number>;

  ngOnInit() {
    this.crudService.getCountValue().then(
      (res) => {
        this.count = res;
        this.cdr.markForCheck();
      },
      (err) => console.log(err)
    );
  }
}
