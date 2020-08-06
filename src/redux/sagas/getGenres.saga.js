import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGenres(action) {
  try {
    const movieId = action.payload;
    const response = yield axios.get('api/genres');
    yield put({
      type: 'SET_GENRES',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}
export default getGenres;
