const localWeatherReducer = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {

    case 'LOCAL_WEATHER':
        console.log('Local Weather');
        return Object.assign({}, state, action.localWeather);

    case 'CURRENT_LOCAL_WEATHER_GPS':
      console.log('gps-local-weather');
      return Object.assign({}, state, action.currentLocalForecast);

    default:
      return state;
  }
};

export default localWeatherReducer;
