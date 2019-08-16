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
const socket = io(socketAddress);
export function socketMiddleware({ getState, dispatch }) {
  socketEventsSetup(socket, dispatch);
  return next => action => {
    const { payload } = action;
    const token = localStorage.getItem('token');
    if (payload && payload.emit && token) {
      socket.emit(payload.emit, { ...payload, token }, room);
    }
    return next(action);
  };
}
const socketEventsSetup = (socket, dispatch) => {
  socket.on('receive-message', messageObj => {
    console.log(messageObj);
    dispatch(receiveMessage(messageObj));
  });
  socket.on('room-details', roomDetails => {
    history.push('/rooms/' + roomDetails.name);
    dispatch(gotRoomDetails(roomDetails));
  });
  socket.on('user-joined', userInfo => {
    dispatch(userJoined(userInfo));
  });
  socket.on('user-left', userInfo => {
    dispatch(userLeft(userInfo));
  });
  socket.on('disconnect', () => {
    socket.emit('disconnect', 'test123');
  });
  socket.on('err', error => {
    history.push('/');
  });
};
