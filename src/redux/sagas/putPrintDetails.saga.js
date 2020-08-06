import axios from 'axios';
import { put } from 'redux-saga/effects';

//function to edit movie details
function* putPrintDetails(action) {
  try {
    const printId = action.payload.id;
    yield axios.put(`/api/prints/edit/${printId}`, action.payload);
    yield put({
      type: 'GET_PRINT',
      payload: printId,
    });
    yield put({
      type: 'GET_GENRES', //GET_MOVIE_GENRES?
      payload: printId,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default putPrintDetails;
