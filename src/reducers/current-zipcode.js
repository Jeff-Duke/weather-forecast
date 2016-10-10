const currentWeatherByZipReducer = (state = {}, action) => {
  switch (action.type) {

    case 'CURRENT_LOCAL_WEATHER_ZIP':
      return Object.assign({}, state, action.currentWeatherByZip);

    default:
      return state;
  }
};

export default currentWeatherByZipReducer;
