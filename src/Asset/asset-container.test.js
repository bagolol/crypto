import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-container';

test('should render the Asset component', () => {
    const component = shallow(<Asset />);
    expect(component.hasClass('asset')).toBe(true);
});

test('should ', () => {
    expect(1).toBe(1)
});

