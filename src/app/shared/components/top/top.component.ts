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
    private authService: IonicAuthService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (
        event instanceof NavigationStart &&
        (event.url === '/tabs/tab2' || event.url === '/tabs/tab3')
      ) {
        this.getMeditationCount();
        this.getStandHours();
      }
    });
  }

  meditationCount: number;
  standCount: number;

  meditationIsLoading = false;
  standIsLoading = false;

  ngOnInit() {
    this.getMeditationCount();
    this.getStandHours();
  }

  getMeditationCount() {
    this.meditationIsLoading = true;
    this.crudService.getCountValue('meditation', this.authService.uuid).then(
      (res: Observable<number>) => {
        res.subscribe((count) => {
          this.meditationCount = count;
          this.meditationIsLoading = false;
        });
        this.cdr.markForCheck();
      },
      (err) => {
        this.meditationIsLoading = false;
        console.log(err);
      }
    );
  }

  getStandHours() {
    this.standIsLoading = true;
    this.crudService.getCountValue('stand', this.authService.uuid).then(
      (res: Observable<number>) => {
        res.subscribe((count) => {
          this.standCount = count;
          this.standIsLoading = false;
        });
        this.cdr.markForCheck();
      },
      (err) => {
        this.standIsLoading = false;
        console.log(err);
      }
    );
  }
}
