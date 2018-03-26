import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Asset from './asset-container';

let promise;
const serverResponse = [
{ asset: 'EUR',
    free: '3',
    locked: '0.00000000',
    price_eur: '3' },
  { asset: 'BTC',
    free: '0.02344304',
    locked: '0.00000000',
    price_eur: '150' }
];

beforeEach(() => {
    const json = { json: () => Promise.resolve(serverResponse) };
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

test('should retrive assets and update state with owned assets and euro total ', () => {
    const component = shallow(<Asset />);

    return promise.then(res => res.json()).then(() => {
        expect(component.state('assets')).toEqual(serverResponse);
        expect(component.state('eurTotal')).toEqual(153);
    });
});


