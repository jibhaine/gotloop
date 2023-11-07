import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { NoizrActionTypes, NoizrActions } from '../actions/noizr.actions';

@Injectable()
export class NoizrEffects {
  
  LoadSettings$ = createEffect(() => this.actions$.pipe(
    ofType(NoizrActionTypes.LoadSettings),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  ));

  constructor(private actions$: Actions<NoizrActions>) {}
}
