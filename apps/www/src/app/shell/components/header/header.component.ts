import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterLink } from '@angular/router';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'glp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgIf, HeaderSearchComponent, RouterLink, IconComponent],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
