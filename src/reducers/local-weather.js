const localWeather = (state = [], action) => {
  switch (action.type) {
    case 'LOCAL_WEATHER':
        return [...state, {localWeather: {localTemp: 50, localCondition: 'ARMAGEDDON'}}];
    default:
      return state;
  }
};

export default localWeather;
