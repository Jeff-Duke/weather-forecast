const pinnedCityExtendedReducer = (state = [], action) => {
  switch (action.type) {
    
    case 'PINNED_CITY_EXTENDED_FORECAST':
    debugger;
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default pinnedCityExtendedReducer;