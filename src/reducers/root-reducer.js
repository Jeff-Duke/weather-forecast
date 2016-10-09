import { combineReducers } from 'redux';
import localWeatherReducer from './local-weather';

const rootReducer = combineReducers({
  localWeatherReducer
});

export default rootReducer;
