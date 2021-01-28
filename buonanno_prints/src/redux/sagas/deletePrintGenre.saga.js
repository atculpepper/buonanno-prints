import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deletePrintGenre(action) {
  try {
    yield axios.delete(`/api/prints/genres/${action.payload.printGenreId}`);
    yield put({
      type: 'GET_PRINT_GENRES',
      payload: action.payload.printId,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default deletePrintGenre;
