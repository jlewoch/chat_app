import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ChatRoom } from './components/chat_room';
import { Rooms } from './components/rooms';
import authWrapper from './components/auth_wrapper/authWrapper';
import { Login } from './components/login';
export const history = createBrowserHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/rooms" exact component={authWrapper(Rooms)} />
        <Route path="/rooms/:RoomId" exact component={authWrapper(ChatRoom)} />
      </Switch>
    </Router>
  );
};
export default App;
