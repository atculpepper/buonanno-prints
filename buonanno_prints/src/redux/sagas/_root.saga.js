import { takeLatest } from 'redux-saga/effects';

// INDIVIDUAL SAGA FILES
import fetchPrints from './fetchPrints';
import getPrint from './getPrint.saga';
import getPrintGenres from './getPrintGenres.saga';
import putPrintDetails from './putPrintDetails.saga';
import deletePrintGenre from './deletePrintGenre.saga';
import getGenres from './getGenres.saga';
import postPrintGenre from './postPrintGenre.saga';
import postGenre from './postGenre.saga';
import deleteGenre from './deleteGenre.saga';
import getUser from './getUser.saga';
import login from './login.saga';
import logout from './logout.saga';
import postPrint from './postPrint.saga';

// REGISTRATION FOR ALL SAGAS
// Create the rootSaga generator function
function* rootSaga() {
  // REGISTER SAGAS HERE
  yield takeLatest('GET_PRINTS', fetchPrints);
  yield takeLatest('GET_PRINT', getPrint);
  yield takeLatest('GET_PRINT_GENRES', getPrintGenres);
  yield takeLatest('PUT_PRINT', putPrintDetails);
  yield takeLatest('DELETE_PRINT_GENRE', deletePrintGenre);
  yield takeLatest('GET_GENRES', getGenres);
  yield takeLatest('POST_PRINT_GENRE', postPrintGenre);
  yield takeLatest('POST_GENRE', postGenre);
  yield takeLatest('DELETE_GENRE', deleteGenre);
  yield takeLatest('GET_USER', getUser);
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('POST_PRINT', postPrint);
}

export default rootSaga;
