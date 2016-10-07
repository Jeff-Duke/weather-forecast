import { RECEIVE_FORECAST, REQUEST_FORECAST } from '../actions/index.js';

const weather = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_FORECAST:
        return state;
    
    case RECEIVE_FORECAST:
        return  {
            city: name,
        };
    default:
      return state;
  }
};

export default weather;