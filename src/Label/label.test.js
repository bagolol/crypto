import React from 'react';
import Label from './label';

test('should render the Label component', () => {
    const wrapper = shallow(<Label assetName="test"/>);
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('test');
});


