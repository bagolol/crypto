import React from 'react';
import App from './app';

test('should render the App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual('Crypto-portafoglio');
});
