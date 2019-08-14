import React, { Component } from 'react';
import { UserList } from '../../components/user_list';
import { ChatWindow } from '../../components/chat_window';
import { capAllFirstLetters } from '../../helpers/string_mutation';

export default class ChatRoomDisplay extends Component {
  render() {
    const { name, roomId } = this.props;
    console.log(name, roomId);
    return !name || !roomId ? (
      <a href="/">Go Back</a>
    ) : (
      <div className="room">
        <UserList users={this.props.users} />
        <ChatWindow />
      </div>
    );
  }
}
