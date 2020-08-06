import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteMovieGenre(action) {
  try {
    yield put({ type: 'CLEAR_GENRES_ERROR' });
    yield axios.delete(`/api/genres/${action.payload.genreId}`);
    yield put({
      type: 'GET_GENRES',
    });
  } catch (err) {
    console.warn(err);
    yield put({
      type: 'GENRES_ERROR',
      payload:
        'There was an error removing the Genre. Make Sure none of your movies have this Genre before deleting.',
    });
  }
}

export default deleteMovieGenre;
