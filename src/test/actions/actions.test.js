import * as actions from '../../actions';

import { receiveCurrentWeatherByGPS, receiveCurrentWeatherByZip } from '../../actions';

describe('actions', () => {
  it('should create an action', () => {
    expect(true).toEqual(true)
  });

  it('should create an action to identify current local weather by GPS', () => {
    const json = 'cloudy';
    const expectedAction = {
      type: 'CURRENT_LOCAL_WEATHER_GPS',
      currentLocalForecast: json
    };

    expect(receiveCurrentWeatherByGPS(json)).toEqual(expectedAction);
  });


});
