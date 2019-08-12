import { createAction } from 'redux-act';
import * as types from './actionTypes';

export const receiveMessage = createAction(types.RECEIVE_MESSAGE);
export const setRoom = createAction(types.SET_ROOM);
export const userJoined = createAction(types.USER_JOINED);
export const userLeft = createAction(types.USER_LEFT);
export const gotList = createAction(types.GOT_LIST);
export const setError = createAction(types.SET_ERROR);
export const reconnect = createAction(types.RECONNECT);
