import { createAction } from 'redux-act';
import * as types from './actionTypes';

export const receiveMessage = createAction(types.RECEIVE_MESSAGE);
export const setRoom = createAction(types.SET_ROOM);
export const userJoined = createAction(types.USER_JOINED);
export const userLeft = createAction(types.USER_LEFT);
export const setError = createAction(types.SET_ERROR);
export const reconnect = createAction(types.RECONNECT);
export const gotRoomDetails = createAction(types.GOT_ROOM_DETAILS);
export const gotRoomList = createAction(types.GOT_ROOM_LIST);
