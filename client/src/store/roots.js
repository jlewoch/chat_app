import { combineReducers } from 'redux';
import room from './room/reducer';

const rootReducer = combineReducers({
  room
});

export default rootReducer;
