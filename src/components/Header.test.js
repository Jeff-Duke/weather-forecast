import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  xit('should have a main title render on every page', () => {
    const wrapper = shallow( <Header /> );

    expect(wrapper.find('.main-title').length).toEqual(1);
  });

  it('renders the name of the city in <p> tags', () => {
    const wrapper = shallow(<Header name ="Denver" />);
    const title = <p>Denver</p>;

    expect(wrapper.contains(title)).toEqual(true);
  });
});
