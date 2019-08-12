import io from 'socket.io-client';
import { history } from '../../App';
import {
  userJoined,
  userLeft,
  receiveMessage,
  gotList,
  setRoom
} from '../room/actions';

const socketAddress = 'http://localhost:3000';

export function socketMiddleware({ getState, dispatch }) {
  const socket = io(socketAddress);
  socketEventsSetup(socket, dispatch);
  return next => action => {
    console.log(next, action);
    const { payload } = action;

    if (payload && payload.emit) {
      const room = localStorage.getItem('roomId');
      console.log(room);
      socket.emit(payload.emit, payload, room);
    }
    return next(action);
  };
}
const socketEventsSetup = (socket, dispatch) => {
  socket.on('receive-message', messageObj => {
    console.log(messageObj);
    dispatch(receiveMessage(messageObj));
  });
  socket.on('users-list', (users, roomId) => {
    history.push('/' + roomId);
    dispatch(gotList(users));
  });
  socket.on('user-joined', userInfo => {
    dispatch(userJoined(userInfo));
  });
  socket.on('user-left', userInfo => {
    dispatch(userLeft(userInfo));
  });
  socket.on('err', error => {
    history.push('/');
  });
};
