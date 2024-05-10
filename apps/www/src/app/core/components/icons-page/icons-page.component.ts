import { Component, OnInit } from '@angular/core';

import { IconCode } from '../../../shell/components/icon/icon-code.enum';
import { IconComponent } from '../../../shell/components/icon/icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'glp-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  standalone: true,
  imports: [NgFor, IconComponent],
})
export class IconsPageComponent implements OnInit {
  icons: IconCode;

  iconKeys: string[] = [];

  constructor() {}

  ngOnInit() {
    this.iconKeys = Object.keys(IconCode);
    /*.map(key => {
      console.log(key);
      return IconCode[key];
    });*/
  }
}
