import * as types from "../constants/ActionTypes";
import { addUser, messageRecieved, populateUsersList } from "../actions";
import io from "socket.io-client";

const setupSocket = (dispatch, username) => {
  const home = io.connect("http://localhost/home");
    console.log(username);
    
  home.on("connect", () => {
    home.emit('message',
      JSON.stringify({
        type: types.ADD_USER,
        name: username
      })
    );
  });

  home.on("message", e => {
    const data = JSON.parse(e);
    
    switch (data.type) {
      case types.ADD_MESSAGE:
      console.log('add', data)
        dispatch(messageRecieved(data.message, data.author));
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name));
        break;
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  });
  return home
};

export default setupSocket;
