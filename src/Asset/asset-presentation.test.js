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
    const wrapper = shallow(<Asset assets={ values }/>);
    expect(wrapper.find('Label').length).toBe(2);
});

test('should show the total in Euro', () => {
    const wrapper = shallow(<Asset assets={ values } total="153"/>);
    expect(wrapper.find('.euro-value').text()).toBe("153");
});


test('should show details about a single asset when clicked', () => {
    const showAssetDetails = jest.fn();
    const component = shallow(<Asset assets={ values } showAssetDetails={ showAssetDetails }/>);
    const firstAsset = component.find('.asset').first();
    firstAsset.simulate('click');
    expect(showAssetDetails).toHaveBeenCalledWith('EUR');
});

