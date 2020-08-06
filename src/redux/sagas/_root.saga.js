import { takeLatest } from 'redux-saga/effects';

// INDIVIDUAL SAGA FILES
import fetchPrints from './fetchPrints';
import getMovie from './getPrint.saga';
import getMovieGenres from './getPrintGenres.saga';
import putMovieDetails from './putPrintDetails.saga';
import deleteMovieGenre from './deletePrintGenre.saga';
import getGenres from './getGenres.saga';
import postMovieGenre from './postPrintGenre.saga';
import postGenre from './postGenre.saga';
import deleteGenre from './deleteGenre.saga';
import getUser from './getUser.saga';
import login from './login.saga';
import logout from './logout.saga';

// REGISTRATION FOR ALL SAGAS
// Create the rootSaga generator function
function* rootSaga() {
  // REGISTER SAGAS HERE
  yield takeLatest('GET_PRINTS', fetchPrints);
  yield takeLatest('GET_PRINT', getMovie);
  yield takeLatest('GET_PRINT_GENRES', getMovieGenres);
  yield takeLatest('PUT_PRINT', putMovieDetails);
  yield takeLatest('DELETE_PRINT_GENRE', deleteMovieGenre);
  yield takeLatest('GET_GENRES', getGenres);
  yield takeLatest('POST_PRINT_GENRE', postMovieGenre);
  yield takeLatest('POST_GENRE', postGenre);
  yield takeLatest('DELETE_GENRE', deleteGenre);
  yield takeLatest('GET_USER', getUser);
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
}

export default rootSaga;
