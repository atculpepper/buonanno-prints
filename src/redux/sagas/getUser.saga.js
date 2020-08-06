import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGenres(action) {
  try {
    const response = yield axios.get('/api/auth/user');
    yield put({
      type: 'SET_USER',
      payload: response.data,
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
    yield put({
      type: 'RESET_USER',
    });
  }
}

export default getGenres;
