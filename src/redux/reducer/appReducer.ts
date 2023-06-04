import initialState from './initialState';
import * as types from '../action/actionTypes';

interface appActions {
  type: string
  payload: any
}

export default function appReducer(currentState: any, action: appActions): any {
  const state = currentState || initialState.app;
  switch (action.type) {
    case types.SET_MODAL_STATE:
      return {
        ...state,
        openModal: action.payload
      };

    default:
      return state;
  }
}
