import React from 'react';
import Value from './value';

test('should render the Value component', () => {
    const wrapper = shallow(<Value value="0.123"/>);
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('0.123');
});

