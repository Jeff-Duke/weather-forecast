
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './containers/Dashboard';
import SettingsContainer from './containers/SettingsContainer';
import ExtendedForecastContainer from './containers/ExtendedForecastContainer';
import PinnedCityExtendedContainer from './containers/PinnedCityExtendedContainer'

import App from './components/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Settings" component={SettingsContainer} />
      <Route path="/ExtendedForecast" component={ExtendedForecastContainer} />
      <Route path="/PinnedCityExtended/:zip" component={PinnedCityExtendedContainer} />
    </Route>
  </Router>
);

export default Routes;
