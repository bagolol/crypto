import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './app';

test('should render the App component', () => {
    const component = shallow(<App />);
    expect(component.text()).toEqual('Crypto-portafoglio');
});
