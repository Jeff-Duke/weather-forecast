import { combineReducers } from 'redux';
import localWeatherReducer from './local-weather';
import extendedForecastReducer from './extended-forecast';
import pinnedCityReducer from './pinned-city';

const rootReducer = combineReducers({
  localWeatherReducer,
  extendedForecastReducer,
  pinnedCityReducer
});

export default rootReducer;
