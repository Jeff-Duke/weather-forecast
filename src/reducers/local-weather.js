const localWeatherReducer = (state = {}, action) => {
  switch (action.type) {

    case 'CURRENT_LOCAL_WEATHER_GPS':
      return Object.assign({}, state, action.currentLocalForecast.current_observation);

    default:
      return state;
  }
};

export default localWeatherReducer;
