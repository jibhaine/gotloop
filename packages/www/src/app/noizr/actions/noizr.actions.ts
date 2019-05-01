import { Action } from '@ngrx/store';

export enum NoizrActionTypes {
  LoadSettings = '[Noizr] Load Settings',


}

export class LoadSettings implements Action {
  readonly type = NoizrActionTypes.LoadSettings;
}


export type NoizrActions = LoadSettings;
