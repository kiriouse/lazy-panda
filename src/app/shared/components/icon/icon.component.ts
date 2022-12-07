import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() hours: number;
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit() {}
}
