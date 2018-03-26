import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-presentation';

const values = [
    { asset: 'EUR',
        free: '3',
        locked: '0.00000000',
        price_eur: '3' },
    { asset: 'BTC',
        free: '0.02344304',
        locked: '0.00000000',
        price_eur: '150' }
];

test('should render the Asset component', () => {
    const wrapper = shallow(<Asset assets={[]} />);
    expect(wrapper.length).toBe(1);
});

test('should render children components', () => {
    const wrapper = shallow(<Asset assets={values}/>);
    expect(wrapper.find('Label').length).toBe(2);
    expect(wrapper.find('Value').length).toBe(4);
});

test('should show the total in Euro', () => {
    const wrapper = shallow(<Asset assets={values} total="153"/>);
    expect(wrapper.find('.euro-total').text()).toBe("153");
});



