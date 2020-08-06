import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getMovieGenres(action) {
  try {
    const movieId = action.payload;
    const response = yield axios.get(`/api/movies/genres/${movieId}`);
    yield put({
      type: 'SET_MOVIE_GENRES',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default getMovieGenres;
