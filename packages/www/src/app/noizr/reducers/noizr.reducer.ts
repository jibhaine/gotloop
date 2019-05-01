
import { NoizrActions, NoizrActionTypes } from '../actions/noizr.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: NoizrActions): State {
  switch (action.type) {

    case NoizrActionTypes.LoadSettings:
      return state;

    default:
      return state;
  }
}
