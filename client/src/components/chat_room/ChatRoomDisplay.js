import React, { Component } from 'react';
import UserList from './chat_window/UserListDisplay';
import { ChatWindow } from './chat_window';

export default class ChatRoomDisplay extends Component {
  render() {
    return (
      <div className="room">
        <UserList users={{ jake: { name: 'jake' } }} />
        <ChatWindow />
      </div>
    );
  }
}
