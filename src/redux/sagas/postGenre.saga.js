import axios from 'axios';
import { put } from 'redux-saga/effects';

function* postGenre(action) {
  try {
    yield axios.post(`/api/genres/`, action.payload);
    yield put({
      type: 'GET_GENRES',
    });
  } catch (err) {
    console.warn(err);
  }
}

export default postGenre;
