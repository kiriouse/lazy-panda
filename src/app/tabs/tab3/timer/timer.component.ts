import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { finalize, map, takeUntil, takeWhile } from 'rxjs/operators';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  img: string;
  title: string;
  subTitle: string;
  playColor: string;
  private stop$ = new Subject<any>();
  private value_: number = 0;
  buffer_: number = 0;
  timerValue = '00:00:00';
  progressbarVisible = false;

  timer$ = timer(0, 1000).pipe(
    takeUntil(this.stop$),
    takeWhile((_) => this.value_ < 1),
    finalize(() => this.someMethod()),
    map((_) => {
      this.value_ = this.value_ + 1 / this.getSeconds(this.timerValue);
      this.timerValue = this.secondsToString(
        this.getSeconds(this.timerValue) - 1
      );
      return this.value_;
    })
  );

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private pickerCtrl: PickerController
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.img = this.route.snapshot.queryParamMap.get('img');
    this.subTitle = this.route.snapshot.queryParamMap.get('subTitle');
    this.playColor = this.route.snapshot.queryParamMap.get('playColor');
  }

  someMethod() {
    console.log('test');
  }

  getSeconds(s: string): number {
    const a = s.split(':');
    return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  }

  secondsToString(n: number): string {
    const sec_num = parseInt(n.toString(), 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600).toString();
    let minutes = Math.floor((sec_num - Number(hours) * 3600) / 60).toString();
    let seconds = (
      sec_num -
      Number(hours) * 3600 -
      Number(minutes) * 60
    ).toString();

    if (Number(hours) < 10) {
      hours = '0' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  goBack() {
    this.location.back();
  }

  async openPicker() {
    const options = [
      { text: '00', value: 0 },
      { text: '01', value: 1 },
      { text: '02', value: 2 },
      { text: '03', value: 3 },
      { text: '04', value: 4 },
      { text: '05', value: 5 },
      { text: '06', value: 6 },
      { text: '06', value: 6 },
      { text: '07', value: 7 },
      { text: '08', value: 8 },
      { text: '09', value: 9 },
    ];

    const hours = [];
    const minutes = [];
    const seconds = [];

    for (let i = 0; i <= 24; i++) {
      i < 10
        ? hours.push({ text: `0${i}`, value: i })
        : hours.push({ text: `${i}`, value: i });
    }

    for (let i = 0; i <= 60; i++) {
      i < 10
        ? minutes.push({ text: `0${i}`, value: i })
        : minutes.push({ text: `${i}`, value: i });
    }
    for (let i = 0; i <= 60; i++) {
      i < 10
        ? seconds.push({ text: `0${i}`, value: i })
        : seconds.push({ text: `${i}`, value: i });
    }
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'hours',
          options: hours,
          selectedIndex: this.getColumnValue(0),
        },
        {
          name: 'minutes',
          options: minutes,
          selectedIndex: this.getColumnValue(1),
        },
        {
          name: 'seconds',
          options: seconds,
          selectedIndex: this.getColumnValue(2),
        },
      ],
      buttons: [
        {
          text: 'Отменить',
          role: 'cancel',
        },
        {
          text: 'Подтвердить',
          handler: (value) => {
            this.timerValue = `${value.hours.text}:${value.minutes.text}:${value.seconds.text}`;
          },
        },
      ],
    });

    await picker.present();
  }

  getColumnValue(i: number) {
    return Number(this.timerValue.split(':')[i]);
  }

  play() {
    this.progressbarVisible = true;
  }

  stop() {
    this.progressbarVisible = false;
  }
}
