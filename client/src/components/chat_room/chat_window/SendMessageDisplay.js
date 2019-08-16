import React, { Component } from 'react';

export default class SendMessageDisplay extends Component {
  state = { message: '' };
  send = e => {
    e.preventDefault();
    if (e && e.key !== 'Enter') {
      console.log(e);
      return;
    }
    this.props.onClick({
      emit: 'send-message',
      message: this.state.message,
      type: 'public',
      received: false,
      sent: Date.now()
    });
    this.setState({ message: '' });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.send);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.send);
  }

  render() {
    const { message } = this.state;
    return (
      <div className="controls">
        <input
          value={message}
          onChange={e => this.setState({ message: e.target.value })}
          type="text"
        />
        <button ref={el => (this.sendBtn = el)} onClick={this.send}>
          Send
        </button>
      </div>
    );
  }
}
