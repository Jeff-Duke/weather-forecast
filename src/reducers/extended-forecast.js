const extendedForecastReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_EXTENDED_FORECAST':
      return Object.assign({}, state, action.extendedForecast.forecast.simpleforecast);

    default:
      return state;
  }
};

export default extendedForecastReducer;
