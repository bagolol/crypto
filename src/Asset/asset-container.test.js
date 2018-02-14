import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-container';

test('should render the Asset component', () => {
    const component = shallow(<Asset />);
    expect(component.hasClass('asset')).toBe(true);
});

test('should retrive assets and update state after mount', () => {
    const assets = [{ bitcoin: 3 }, { litecoin: 3 }];
    const promise = Promise.resolve(assets);
    window.fetch = jest.fn().mockImplementation(() => promise);
    const component = shallow(<Asset />);
    return promise.then(() => {
        expect(window.fetch).toHaveBeenCalled();
        expect(component.state('assets')).toBe(assets);
    });
});

