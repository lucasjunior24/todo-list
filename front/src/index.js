import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
// import history from './history'
// import {Router} from 'react-router-dom'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './App';
import reducers from './reducers'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  // <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  // </Router>
  ,
  document.getElementById('root')
);
