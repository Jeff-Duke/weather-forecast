
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import Settings from './components/Settings';
import ExtendedForecast from './containers/ExtendedForecast';

import App from './components/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Settings" component={Settings} />
      <Route path="/ExtendedForecast" component={ExtendedForecast} />
    </Route>
  </Router>
);

export default Routes;
