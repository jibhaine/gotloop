import { Component, OnInit } from '@angular/core';
import { LoopsService } from '../../services/loops.service';
import { LoopsLoaderComponent } from '../loops-loader/loops-loader.component';
import { LoopPlayerComponent } from '../../../loop/components/loop-player/loop-player.component';
import { NgFor, NgIf } from '@angular/common';
import { ContentPageComponent } from '../../../shell/components/content-page/content-page.component';

@Component({
  selector: 'glp-loop-list',
  templateUrl: './loop-list.component.html',
  styleUrls: ['./loop-list.component.scss'],
  standalone: true,
  imports: [
    ContentPageComponent,
    NgFor,
    LoopPlayerComponent,
    NgIf,
    LoopsLoaderComponent,
  ],
})
export class LoopListComponent implements OnInit {
  public loops: any[];

  public isLoading: boolean;

  constructor(private loopsService: LoopsService) {}

  ngOnInit() {
    this.loopsService.loops$.subscribe((loops: any[]) => {
      this.loops = loops;
    });
  }
}
