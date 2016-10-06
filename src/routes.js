
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './containers/Home'
import PinnedCities from './containers/PinnedCities'
import ExtendedForecast from './containers/ExtendedForecast'

import App from './containers/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/PinnedCities" component={PinnedCities} />
      <Route path="/ExtendedForecast" component={ExtendedForecast} />
    </Route>
  </Router>
);

export default Routes;
