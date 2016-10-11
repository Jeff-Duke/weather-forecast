import React from 'react';
import { shallow, mount } from 'enzyme';
import CityCard from './CityCard';

describe('CityCard component', () => {
  it('renders the name of the city in <h1> tags', () => {
    const wrapper = shallow( <CityCard pinnedCurrentForecast={{}}/> );

    expect(wrapper.contains('City Name')).toEqual(true);
  });

  it('should have a Link to route to the extended forecast', () => {
    const wrapper = shallow( <CityCard pinnedCurrentForecast={{}}/> );

    expect(wrapper.find('.pinned-forecast-extended').length).toEqual(1);
  });
});
