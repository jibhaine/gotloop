import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'glp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  contentRef: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
