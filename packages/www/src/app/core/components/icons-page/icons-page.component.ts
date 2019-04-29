import { Component, OnInit } from '@angular/core';

import { IconCode } from 'src/app/shell/components/icon/icon-code.enum';

@Component({
  selector: 'glp-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit {

  icons: IconCode;

  constructor() { }

  ngOnInit() {
  }

}
