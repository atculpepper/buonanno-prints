import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getPrintGenres(action) {
  try {
    const printId = action.payload;
    const response = yield axios.get(`/api/prints/genres/${printId}`);
    yield put({
      type: 'SET_PRINT_GENRES',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default getPrintGenres;
