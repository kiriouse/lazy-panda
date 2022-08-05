import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (
        event instanceof NavigationStart &&
        (event.url === '/tabs/tab2' || event.url === '/tabs/tab3')
      ) {
        this.getMeditationHours();
      }
    });
  }

  count: Observable<number>;

  ngOnInit() {
    this.getMeditationHours();
  }

  getMeditationHours() {
    this.crudService.getCountValue().then(
      (res: Observable<number>) => {
        this.count = res;
        this.cdr.markForCheck();
      },
      (err) => console.log(err)
    );
  }
}
