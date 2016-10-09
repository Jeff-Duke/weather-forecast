const localWeatherReducer = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'LOCAL_WEATHER':
        return [...state, {localWeather: action.localWeather}];
    case 'GPS_LOCAL_WEATHER':
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default localWeatherReducer;
