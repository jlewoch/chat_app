import { takeEvery, call, put, all } from 'redux-saga/effects';
import { post } from '../api';
import { history } from '../../App';
import * as actions from './actions';
import * as types from './actionTypes';
import { gotRoomList } from '../room/actions';
function* login(e) {
  try {
    console.log(e.payload);
    const { data } = yield call(post, 'auth/login', e.payload);
    localStorage.setItem('token', data.data.token);
    yield put(actions.loggedIn());
    yield put(gotRoomList(data.data.rooms));
    history.push('/rooms');
  } catch (error) {
    console.log(error.message);
  } finally {
  }
}

export const authSagas = function*() {
  yield takeEvery(types.LOGIN, e => login(e));
};
