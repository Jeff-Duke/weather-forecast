const currentWeatherByZipReducer = (state = {}, action) => {
  switch (action.type) {

    case 'CURRENT_LOCAL_WEATHER_ZIP':
      return Object.assign({}, state, action.currentWeatherByZip);

    case 'PINNNED_CITY_CURRENT_WEATHER':
    debugger;
      return Object.assign({}, state, action.pinnedCityCurrentWeather);

    default:
      return state;
  }
};

export default currentWeatherByZipReducer;
