import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  meditationHours = 0;
  standHours = 0;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService
      .getHoursValue('meditation')
      .then((res: Observable<number>) => {
        res.subscribe((value: number) => {
          this.meditationHours = value;
        });
      });
  }
}
