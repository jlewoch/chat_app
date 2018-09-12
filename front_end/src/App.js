import React, { Component } from 'react';
import {Sidebar} from './containers/Sidebar';
import {MessagesList} from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';

class App extends Component {



  render() {
    
    return (
      <div className="container">
      <Sidebar />
      <MessagesList />
      <AddMessage />

      </div>
    );
  }
}

export default App;
