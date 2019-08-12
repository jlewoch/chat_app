import React, { Component } from 'react';
import SendMessageDisplay from './SendMessageDisplay';
import Message from './Message';

export default class ChatWindowDisplay extends Component {
  render() {
    return (
      <div className="container">
        <div className="messages">
          {this.props.messages.map((i, idx) => (
            <Message key={idx} {...i} />
          ))}
        </div>
        <SendMessageDisplay onClick={this.props.send} />
      </div>
    );
  }
}
