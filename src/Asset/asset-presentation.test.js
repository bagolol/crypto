import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-presentation';

test('should render the Asset component', () => {
    const wrapper = shallow(<Asset />);
    expect(wrapper.length).toBe(1);
});

test('should render children Label components', () => {
    const wrapper = shallow(<Asset />);
    expect(wrapper.find('Label').length).toBe(1);
});



