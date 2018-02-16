import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-container';

let promise;
const binanceResponse = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"},
];

beforeEach(() => {
    const json = { json: () => Promise.resolve(binanceResponse) };
    promise = Promise.resolve(json);
    window.fetch = jest.fn().mockImplementation(() => promise);
})

test('should render the Asset component', () => {
    const component = shallow(<Asset />);
    expect(component.length).toBe(1);
});

test('should retrive assets and update state after mount', () => {
    const component = shallow(<Asset />);

    return promise.then(res => res.json()).then(() => {
        expect(window.fetch).toHaveBeenCalled();
    });
});

test('should retrive assets and update state with owned assets', () => {
    const values = [
        {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
        {"asset":"LTC","free":"1.00000000","locked":"0.00000000"}
    ];

    const component = shallow(<Asset />);

    return promise.then(res => res.json()).then(() => {
        expect(component.state('assets')).toEqual(values);
    });
});

