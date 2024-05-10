import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'glp-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class HeaderSearchComponent implements OnInit {
  /** text seached by the user */
  public searchText: string;

  constructor() {}

  ngOnInit() {}
}
