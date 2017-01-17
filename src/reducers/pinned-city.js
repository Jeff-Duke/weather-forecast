const pinnedCityReducer = (state = [], action) => {
  switch (action.type) {

      case 'PINNNED_CITY_CURRENT_WEATHER':
        return state.concat(action.payload);
    default:
      return state;
  }
};

export default pinnedCityReducer;
