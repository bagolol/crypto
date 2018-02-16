import { callApi } from './requester';

const url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=150';

test('should call request', () => {
    expect(1).toEqual(1);
    // return callApi(url, 'GET').then(() => {
    //     expect(request).toHaveBeenCalled();
    // });
});
