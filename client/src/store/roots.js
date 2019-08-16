import { combineReducers } from 'redux';
import room from './room/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  room,
  auth
});

export default rootReducer;
