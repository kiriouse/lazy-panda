import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  title = '';
  src = '';

  constructor(private location: Location, private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.src = this.route.snapshot.queryParamMap.get('link');
  }


  goBack() {
    this.location.back();
  }

  play($event: MouseEvent) {
    console.log('test');
  }
}
