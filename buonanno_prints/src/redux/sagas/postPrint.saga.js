import axios from 'axios';
import { put } from 'redux-saga/effects';

function* postPrint(action) {
  try {
    yield axios.post(`/api/prints/`, action.payload);
    yield put({ type: 'SET_PRINTS' });
  } catch (err) {
    console.warn('error with GET:', err);
  }
}

export default postPrint;
