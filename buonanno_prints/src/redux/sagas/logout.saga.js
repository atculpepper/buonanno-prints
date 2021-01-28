import axios from 'axios';
import { put } from 'redux-saga/effects';

function* logout(action) {
  try {
    yield axios.post(`/api/auth/logout`);
    yield put({
      type: 'GET_USER',
    });
  } catch (err) {
    console.warn(err);
  }
}

export default logout;
