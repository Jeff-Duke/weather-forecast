import React from 'react';
import { shallow, mount } from 'enzyme';
import AddCity from './AddCity';

describe ('AddCity', () => {
  it('should have an input field for adding new zip code', () => {
    const wrapper = shallow( <AddCity /> );

    expect(wrapper.find('.add-zip-field').length).toEqual(1);
  });
});
