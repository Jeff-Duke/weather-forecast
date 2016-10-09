const localWeather = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'LOCAL_WEATHER':
        console.log('Reducer hit!');
        return [...state, {localWeather: {localTemp: 50, localCondition: 'ARMAGEDDON'}}];
    default:
      return state;
  }
};

export default localWeather;
