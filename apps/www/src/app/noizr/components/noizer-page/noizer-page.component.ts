import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../../../shell/components/icon/icon.component';

@Component({
  selector: 'glp-noizer-page',
  templateUrl: './noizer-page.component.html',
  styleUrls: ['./noizer-page.component.scss'],
  standalone: true,
  imports: [IconComponent],
})
export class NoizerPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  createSettings() {
    throw new Error('Method not implemented.');
  }

  openSettings() {}

  deleteSettings() {}

  handleAddSource() {}
}
