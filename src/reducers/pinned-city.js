const pinnedCityReducer = (state = {}, action, pinnedCities=[]) => {
  switch (action.type) {

    case 'CITY_INFO_ZIP':
      return Object.assign({}, state, pinnedCities.concat(action.cityInfo));

    default:
      return state;
  }
};

export default pinnedCityReducer;
