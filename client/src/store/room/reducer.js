import { createReducer } from 'redux-act';
import * as types from './actionTypes';
const initialState = {
  rooms: [],
  current: null
};

const room = createReducer(
  {
    [types.SET_ERROR]: (state, payload) => ({ ...state, error: payload }),
    [types.RECEIVE_MESSAGE]: (state, payload) => ({
      ...state,
      messages: [
        ...state.messages,
        {
          ...payload,
          from: payload.from ? state.users[payload.from].name : state.name
        }
      ]
    }),
    [types.USER_JOINED]: (state, payload) => {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            from: null,
            message: `${payload.name} has joined`,
            sent: Date.now()
          }
        ],
        users: { ...state.users, [payload.socketId]: payload }
      };
    },
    [types.USER_LEFT]: (state, payload) => {
      const users = { ...state.users };
      delete users[payload.socketId];
      return {
        ...state,
        messages: [
          ...state.messages,
          { from: null, message: `${payload.name} has left`, sent: Date.now() }
        ],
        users
      };
    },
    [types.GOT_ROOM_LIST]: (state, payload) => ({
      ...state,
      rooms: payload
    }),
    [types.GOT_ROOM_DETAILS]: (state, payload) => ({
      ...state,
      current: payload.room
    })
  },
  initialState
);
export default room;
