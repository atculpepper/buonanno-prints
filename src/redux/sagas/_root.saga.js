import { takeLatest } from 'redux-saga/effects';

// INDIVIDUAL SAGA FILES
import fetchMovies from './fetchMovies.saga';
import getMovie from './getMovie.saga';
import getMovieGenres from './getMovieGenres.saga';
import putMovieDetails from './putMovieDetails.saga';
import deleteMovieGenre from './deleteMovieGenre.saga';
import getGenres from './getGenres.saga';
import postMovieGenre from './postMovieGenre.saga';
import postGenre from './postGenre.saga';
import deleteGenre from './deleteGenre.saga';
import getUser from './getUser.saga';
import login from './login.saga';
import logout from './logout.saga';

// REGISTRATION FOR ALL SAGAS
// Create the rootSaga generator function
function* rootSaga() {
  // REGISTER SAGAS HERE
  yield takeLatest('GET_MOVIES', fetchMovies);
  yield takeLatest('GET_MOVIE', getMovie);
  yield takeLatest('GET_MOVIE_GENRES', getMovieGenres);
  yield takeLatest('PUT_MOVIE', putMovieDetails);
  yield takeLatest('DELETE_MOVIE_GENRE', deleteMovieGenre);
  yield takeLatest('GET_GENRES', getGenres);
  yield takeLatest('POST_MOVIE_GENRE', postMovieGenre);
  yield takeLatest('POST_GENRE', postGenre);
  yield takeLatest('DELETE_GENRE', deleteGenre);
  yield takeLatest('GET_USER', getUser);
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
}

export default rootSaga;
