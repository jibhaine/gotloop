import { Component, OnInit } from '@angular/core';
import { ContentPageComponent } from '../../../shell/components/content-page/content-page.component';

@Component({
  selector: 'glp-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  standalone: true,
  imports: [ContentPageComponent],
})
export class ErrorPageComponent implements OnInit {
  /**
   * Displayed error.
   */
  public error: Error;

  constructor() {}

  ngOnInit() {}
}
