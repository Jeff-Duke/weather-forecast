
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './containers/dashboard';
import SettingsContainer from './containers/SettingsContainer';
import ExtendedForecastContainer from './containers/ExtendedForecastContainer';

import App from './components/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Settings" component={SettingsContainer} />
      <Route path="/ExtendedForecast" component={ExtendedForecastContainer} />
    </Route>
  </Router>
);

export default Routes;
