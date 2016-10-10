import { combineReducers } from 'redux';
import localWeatherReducer from './local-weather';
import extendedForecastReducer from './extended-forecast';

const rootReducer = combineReducers({
  localWeatherReducer,
  extendedForecastReducer
});

export default rootReducer;
