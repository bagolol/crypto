import React from 'react';
import Label from './label';

test('should render the Label component', () => {
    const component = shallow(<Label />);
    expect(component.length).toBe(1);
});

test('should have a name', () => {
    const component = shallow(<Label name="test"/>);
    expect(component.text()).toBe('test');
});

