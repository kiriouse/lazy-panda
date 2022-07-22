import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataConvertService {
  constructor() {}

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

  getSeconds(s: string): number {
    const a = s.split(':');
    return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  }
}
