import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { RoomSelection } from './views/selection';
import { ChatRoom } from './views/chat_room';
export const history = createBrowserHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={RoomSelection} />
        <Route path="/:RoomId" exact component={ChatRoom} />
      </Switch>
    </Router>
  );
};
export default App;
