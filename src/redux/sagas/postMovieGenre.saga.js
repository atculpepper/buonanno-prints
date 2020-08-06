import axios from 'axios';
import { put } from 'redux-saga/effects';

function* postMovieGenre(action) {
  try {
    yield axios.post(`/api/movies/genres/`, action.payload);
    yield put({
      type: 'GET_MOVIE_GENRES',
      payload: action.payload.movies_id,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default postMovieGenre;
