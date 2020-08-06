import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//REDUCERS abstracted to their own folder under redux

// Create one store that all components can use
const storeInstance = createStore(
  // replacing reducer registration with abstracted file
  rootReducer,
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
