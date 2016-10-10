import { combineReducers } from 'redux';
import localWeatherReducer from './local-weather';
import currentWeatherByZipReducer from './current-zipcode';
import extendedForecastReducer from './extended-forecast';

const rootReducer = combineReducers({
  localWeatherReducer,
  currentWeatherByZipReducer,
  extendedForecastReducer
});

export default rootReducer;
