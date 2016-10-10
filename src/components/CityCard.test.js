import React from 'react';
import { shallow, mount } from 'enzyme';
import CityCard from './CityCard';

describe('CityCard component', () => {
  xit('renders the name of the city in <h1> tags', () => {
    const wrapper = shallow( <CityCard /> );
    const title = <h1>City Name</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should have a Link to route to the extended forecast', () => {
    const wrapper = shallow( <CityCard /> );

    expect(wrapper.find('.pinned-forecast-extended').length).toEqual(1);
  });
});
