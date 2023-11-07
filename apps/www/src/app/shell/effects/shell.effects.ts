import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShellActionTypes, ShellActions } from '../actions/shell.actions';

@Injectable()
export class ShellEffects {
  
  searchChange$ = createEffect(() => this.actions$.pipe(
    ofType(ShellActionTypes.SearchChange),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  ));

  constructor(private actions$: Actions<ShellActions>) {}
}
