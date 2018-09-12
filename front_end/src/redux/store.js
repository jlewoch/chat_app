import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "../reducers";
import {username} from '../utils/name'
import setupSocket from '../sockets'
import  handleNewMessage  from "./sagas";
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(reducers,applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch, username)
sagaMiddleware.run(handleNewMessage,{socket,username})




