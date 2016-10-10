import { combineReducers } from 'redux';
import localWeatherReducer from './local-weather';
import currentWeatherByZipReducer from './current-zipcode';
import extendedForecastReducer from './extended-forecast';
import pinnedCityReducer from './pinned-city';

const rootReducer = combineReducers({
  localWeatherReducer,
  currentWeatherByZipReducer,
  extendedForecastReducer,
  pinnedCityReducer
});

export default rootReducer;
