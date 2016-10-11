const pinnedCityReducer = (state = [], action) => {
  switch (action.type) {

    case 'CITY_INFO_ZIP':
      return state.concat(action.cityInfo);

    default:
      return state;
  }
};

export default pinnedCityReducer;
