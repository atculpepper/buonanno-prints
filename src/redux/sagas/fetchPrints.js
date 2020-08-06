import axios from 'axios';
import { put } from 'redux-saga/effects';

//get prints from server and store to prints reducer
function* fetchPrints(action) {
  try {
    const response = yield axios.get('/api/prints');

    yield put({ type: 'SET_PRINTS', payload: response.data });
  } catch (err) {
    console.warn('error with GET:', err);
  }
}

export default fetchPrints;
