import * as actions from '../../actions';

import { receiveCurrentWeatherByGPS, receiveCurrentExtendedForecast, receiveCurrentPinnedCityWeather } from '../../actions';

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

  it('should create an action to identify current extended forecast', () => {
    const json = 'cloudy';
    const expectedAction = {
      type: 'CURRENT_EXTENDED_FORECAST',
      extendedForecast: json
    };

    expect(receiveCurrentExtendedForecast(json)).toEqual(expectedAction);
  });

  it('should create an action to receive weather for a pinned city', () => {
    const pinnedCityWeather = {};
    const cityInfo = {};
    const zipcode = '80021'
    const expectedAction = {
      type: 'PINNNED_CITY_CURRENT_WEATHER',
      payload: {"zipcode":"80021"}

    };

    expect(receiveCurrentPinnedCityWeather(pinnedCityWeather, cityInfo, zipcode)).toEqual(expectedAction);
  });
});
