import { callApi } from './requester';


const mockRequest = jest.genMockFromModule('request');

const url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=150';

test('should call request', () => {
    return callApi(url, 'GET').then(() => {
        expect(mockRequest).toHaveBeenCalled();
    });
});
