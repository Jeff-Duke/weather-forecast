const localWeatherReducer = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'LOCAL_WEATHER':
        console.log('local-weather-action')
        return [...state, {localWeather: action.localWeather}];
    case 'CURRENT_LOCAL_WEATHER_GPS':
      console.log('gps-local-weather');
      return state;
    default:
      return state;
  }
};

export default localWeatherReducer;
