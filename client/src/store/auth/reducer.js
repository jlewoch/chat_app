import { createReducer } from 'redux-act';
import * as types from './actionTypes';
const initialState = {
  isAuthenticated: false
};

const auth = createReducer(
  {
    [types.LOGGEDIN]: (state, payload) => ({ ...state, isAuthenticated: true })
  },
  initialState
);
export default auth;
