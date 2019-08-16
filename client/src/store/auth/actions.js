import { createAction } from 'redux-act';
import * as types from './actionTypes';

export const login = createAction(types.LOGIN);
export const loggedIn = createAction(types.LOGGEDIN);
