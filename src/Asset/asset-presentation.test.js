import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-presentation';

const values = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"}
];

test('should render the Asset component', () => {
    const wrapper = shallow(<Asset assets={[]} />);
    expect(wrapper.length).toBe(1);
});

test('should render children components', () => {
    const wrapper = shallow(<Asset assets={values}/>);
    expect(wrapper.find('Label').length).toBe(2);
    expect(wrapper.find('Value').length).toBe(2);
});

test('should render children Label components', () => {
    expect(1).toBe(1);
});



