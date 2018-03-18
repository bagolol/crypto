import getAssetAndQuotations from './apiCalls';
import getBinanceAssets from './binanceAssets';
import getCoinbaseBalance from './coinbaseBalance';

jest.mock('./coinbaseBalance');
jest.mock('./binanceAssets');

const expectedResult = [
    {"asset": "BTC", "free": "1.00000000", "locked": "0.00000000", "price_eur": "8098.11"},
    {"asset": "ETH", "free": "1.00000000", "locked": "0.00000000", "price_eur": "10"}
];

const error = new Error('unable to retrieve assets');
const rejectedPromise = jest.fn(() => Promise.reject(error));

const testUrl = 'https://api.test.com';

test('should get assets and their EUR quotations', async () => {
    const data = await getAssetAndQuotations(testUrl, 'GET');
    expect(data).toEqual(expectedResult);
});

test('should return an error when the first request fails', async () => {
    getCoinbaseBalance.mockImplementationOnce(rejectedPromise);
    await expect(getAssetAndQuotations(testUrl, 'GET')).rejects.toEqual(error);
});

test('should return an error when the second request fails', async () => {
    getBinanceAssets.mockImplementationOnce(rejectedPromise);
    await expect(getAssetAndQuotations(testUrl, 'GET')).rejects.toEqual(error);
});

