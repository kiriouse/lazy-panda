import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { finalize, map, takeUntil, takeWhile } from 'rxjs/operators';
import { PickerController } from '@ionic/angular';
import { CrudService } from '../../../shared/services/crud.service';
import { DataConvertService } from '../../../shared/services/data-convert.service';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  img: string;
  title: string;
  subTitle: string;
  type: string;
  private stop$ = new Subject<any>();
  private value_: number = 0;
  buffer_: number = 0;
  timerValue = '00:00:00';
  progressbarVisible = false;
  secondsCounter = 0;
  timerEnd = 0;

  timer$ = timer(0, 1000).pipe(
    takeUntil(this.stop$),
    takeWhile((_) => this.value_ < 1),
    finalize(() => this.saveHoursToDB()),
    map((_) => {
      this.secondsCounter++;
      this.value_ = this.value_ + this.timerEnd;
      this.timerValue = this.dataConvertService.secondsToString(
        this.dataConvertService.getSeconds(this.timerValue) - 1
      );

      if (this.timerValue === '00:00:00') {
        this.progressbarVisible = false;
      }

      return this.value_;
    })
  );

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private pickerCtrl: PickerController,
    private crudService: CrudService,
    private dataConvertService: DataConvertService,
    private nativeAudio: NativeAudio,
    private insomnia: Insomnia,
    private cdr: ChangeDetectorRef,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.img = this.route.snapshot.queryParamMap.get('img');
    this.subTitle = this.route.snapshot.queryParamMap.get('subTitle');
    this.getPickerValue(this.type);

    setTimeout(() => {
      this.nativeAudio
        .preloadComplex('ring', 'assets/mp3/tibetan-bell-sound.mp3', 1, 1, 0)
        .then(
          () => {
            this.nativeAudio.setVolumeForComplexAsset('ring', 0.9).then(
              (res) => console.log(res),
              (err) => console.log(err)
            );
          },
          (err) => {
            console.log(err);
          }
        );
    }, 3000);
  }

  getPickerValue(typeOfActivity: string): void {
    this.storage.get(`${typeOfActivity}TimerValue`).then((value) => {
      value ? (this.timerValue = value) : (this.timerValue = '00:00:00');
    });
  }

  goBack() {
    this.cdr.detectChanges();
    this.location.back();
  }

  async openPicker() {
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
    this.timerEnd = 1 / this.dataConvertService.getSeconds(this.timerValue);
    this.storage.set(`${this.type}TimerValue`, this.timerValue);
    this.insomnia.keepAwake().then(
      () => console.log('success'),
      () => console.log('error')
    );
  }

  stop() {
    this.progressbarVisible = false;
    this.getPickerValue(this.type);
    this.insomnia.allowSleepAgain().then(
      () => console.log('success'),
      () => console.log('error')
    );
  }

  saveHoursToDB() {
    this.crudService.update(this.secondsCounter, this.type);
    this.buffer_ = 0;
    this.value_ = 0;
    this.secondsCounter = 0;
    this.progressbarVisible = false;
    this.nativeAudio.play('ring', () => console.log('ring is done playing'));

    this.insomnia.allowSleepAgain().then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
