import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../redux/saga';
import rootReducer from './roots';
import { socketMiddleware } from './sockets';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, socketMiddleware))
);

export default store;
