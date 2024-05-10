import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'glp-loop-form',
  templateUrl: './loop-form.component.html',
  styleUrls: ['./loop-form.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class LoopFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
