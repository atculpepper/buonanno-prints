import axios from 'axios';
import { put } from 'redux-saga/effects';

//get movies from server and store to movies reducer
function* fetchMovies(action) {
  try {
    const response = yield axios.get('/api/movies');

    yield put({ type: 'SET_MOVIES', payload: response.data });
  } catch (err) {
    console.warn('error with GET:', err);
  }
}

export default fetchMovies;
