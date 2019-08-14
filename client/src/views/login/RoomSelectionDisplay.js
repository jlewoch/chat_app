import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
class LoginDisplay extends Component {
  state = {
    validRoom: false,
    roomInput: '',
    nameInput: ''
  };
  changeHandler = e => {
    this.setState({
      roomInput: e.target.value,
      validRoom: RegExp(/^\d+$/).test(e.target.value)
    });
  };
  render() {
    const { nameInput, validRoom, roomInput } = this.state;

    return (
      <div id="login">
        <div className="login-container">
          <h1>Socket Chat</h1>

          <div className="login">
            <div className="selection-box">
              <input
                id="roomInput"
                onChange={this.changeHandler}
                value={roomInput}
                required
                className="inputstyle"
                type="text"
              />
              <span className="floating-label">Enter Room</span>
            </div>
            <div className="selection-box">
              <input
                id="nameInput"
                onChange={e => this.setState({ nameInput: e.target.value })}
                value={nameInput}
                required
                className="inputstyle"
                type="text"
              />
              <span className="floating-label">Enter Name</span>
            </div>
            <div className="actions">
              <button
                disabled={!validRoom}
                onClick={() =>
                  this.props.joinRoom({
                    emit: 'join-room',
                    roomId: roomInput,
                    name: nameInput
                  })
                }
                className="btn"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginDisplay.propTypes = {};

export default LoginDisplay;
