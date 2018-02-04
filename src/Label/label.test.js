import React from 'react';
import Label from './label';

test('should render the Label component', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.length).toBe(1);
});

test('should have a name', () => {
    const wrapper = shallow(<Label name="test"/>);
    expect(wrapper.text()).toBe('test');
});

