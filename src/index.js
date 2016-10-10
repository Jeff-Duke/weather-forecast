import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers/root-reducer';
import localWeatherReducer from './reducers/local-weather';

require("!style!css!sass!./style/styles.scss");

const middleware = [thunk, createLogger];

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f);

let store = createStore(rootReducer, {});

render(
  <Provider store={store}>
    <Routes history={browserHistory}/>
  </Provider>, document.getElementById('root'))
