import { createFeatureSelector, createReducer, on, createAction, createSelector } from '@ngrx/store';
import { User } from './../user';
import * as AppState from '../../state/app.state';


export interface State extends AppState.State {
  user: userState;
}

export interface userState {
  showName: boolean;
  currentUser: User;
}

const initialState: userState = {
  currentUser: null,
  showName: true
}

// Selectors
const getLoginFeatureState = createFeatureSelector<userState>('users');

export const getShowName = createSelector(
  getLoginFeatureState,
  state => state.showName
);

// Reducers
export const userReducer = createReducer<userState>(
  initialState,
  on(createAction('[Login] Toggle Name Mask'), state => {
    return {
      ...state,
      showName: !state.showName
    }
  })
)