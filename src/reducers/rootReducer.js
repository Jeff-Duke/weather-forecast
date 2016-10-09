import { combineReducers } from 'redux';
import localWeather from './local-weather';

const rootReducer = combineReducers({
  localWeather
});

export default rootReducer;
