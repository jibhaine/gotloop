import { Action } from '@ngrx/store';

export enum NoizrActionTypes {
  LoadSettings = '[Noizr] Load Settings',
  CreateSetting = '[Noizr] Create Setting',
  OpenSetting = '[Noizr] Create Setting',

  CreateNodeBox = '[Noizr] Create Node Box',
  CreateCable = '[Noizr] Create Cable',
}

export class LoadSettings implements Action {
  readonly type = NoizrActionTypes.LoadSettings;
}


export type NoizrActions = LoadSettings;
