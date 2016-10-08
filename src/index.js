import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import denverWeather from './data/weather'
require("!style!css!sass!./style/styles.scss");
console.log(denverWeather)
const defaultState = {
  weather: denverWeather
}

const middleware = [thunk, createLogger];
const store = createStore(
  rootReducer, defaultState,
  compose (
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
