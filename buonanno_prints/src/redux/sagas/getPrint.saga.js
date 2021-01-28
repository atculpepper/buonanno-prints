import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getPrint(action) {
  try {
    const printId = action.payload;
    const response = yield axios.get(`/api/prints/details/${printId}`);
    yield put({
      type: 'SET_DETAILS',
      payload: response.data[0],
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

export default getPrint;
