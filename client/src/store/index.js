import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../redux/saga';
import rootReducer from './roots';
import { socketMiddleware } from './sockets';
import { authSagas } from './auth/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, socketMiddleware))
);
sagaMiddleware.run(function* sagas() {
  yield all([authSagas()]);
});
export default store;
