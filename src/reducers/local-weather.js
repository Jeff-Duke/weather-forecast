const localWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOCAL_WEATHER':
        return [...state, {localWeather: {
          localTemp: 65,
          localCondition: action.localWeather.weather[0].main}
        }];
    default:
      return state;
  }
};

export default localWeatherReducer;
