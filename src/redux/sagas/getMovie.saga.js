import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getMovie(action) {
  try {
    const movieId = action.payload;
    const response = yield axios.get(`/api/movies/details/${movieId}`);
    yield put({
      type: 'SET_DETAILS',
      payload: response.data[0],
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

export default getMovie;
