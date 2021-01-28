import axios from 'axios';
import { put } from 'redux-saga/effects';

function* postPrintGenre(action) {
  try {
    yield axios.post(`/api/prints/genres/`, action.payload);
    yield put({
      type: 'GET_PRINT_GENRES',
      payload: action.payload.prints_id,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default postPrintGenre;
