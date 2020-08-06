import axios from 'axios';
import { put } from 'redux-saga/effects';

function* login(action) {
  try {
    yield axios.post(`/api/auth/login`, action.payload);
    yield put({
      type: 'GET_USER',
    });
  } catch (err) {
    console.warn(err);
  }
}

export default login;
