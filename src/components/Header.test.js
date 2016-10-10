import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import localWeatherData from '../actions/data/weather';

describe('Header component', () => {
  it('should have a main title render on every page', () => {
    const wrapper = shallow(
      <Header
        localWeather={
          localWeatherData
        }
      /> );

    expect(wrapper.find('.main-title').length).toEqual(1);
  });

  it('renders the name of the city in <p> tags', () => {
    const wrapper = shallow(
      <Header
        name="Denver"
        localWeather={
          localWeatherData}
        />);

    expect(wrapper.contains('Denver')).toEqual(true);
  });

  // it('renders the local temp when temp is passed in', () => {
  //   const wrapper = shallow(<Header />);
  //
  //   expect(wrapper.)
  // });
});
