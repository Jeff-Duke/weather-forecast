import { combineReducers } from 'redux';
import localWeatherReducer from './local-weather';
import extendedForecastReducer from './extended-forecast';
import pinnedCityReducer from './pinned-city';
import pinnedCityExtendedReducer from './pinned-city-extended';

const rootReducer = combineReducers({
  localWeatherReducer,
  extendedForecastReducer,
  pinnedCityReducer,
  pinnedCityExtendedReducer
});

export default rootReducer;
