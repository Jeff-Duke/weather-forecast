
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import PinnedCities from './components/PinnedCities';
import ExtendedForecast from './components/ExtendedForecast';

import App from './components/App';

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
