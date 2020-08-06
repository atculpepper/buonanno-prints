import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteMovieGenre(action) {
  try {
    yield axios.delete(`/api/movies/genres/${action.payload.movieGenreId}`);
    yield put({
      type: 'GET_MOVIE_GENRES',
      payload: action.payload.movieId,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default deleteMovieGenre;
