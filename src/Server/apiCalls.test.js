jest.mock('./requester');

import getAssetAndQuotations from './apiCalls';
import request from './requester';

const assets = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"}
];

const valuations = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "price_eur": "8098.1094044",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "price_eur": "750.47210504",
    }
]

const enrichedValues = [
    {"asset": "BTC", "free": "1.00000000", "locked": "0.00000000", "price_eur": "8098.1094044"}
];

const error = { error: "Unable to retrieve assets" };
const rejectedPromise = jest.fn(() => Promise.reject(error));
const successfulAssetsPromise = jest.fn(() => Promise.resolve(assets));
const successfulValuationsPromise = jest.fn(() => Promise.resolve(valuations));

const coinMarketUrl = 'https://api.coinmarketcap.com';

test('should get assets and their EUR quotations', async () => {
    request
        .mockImplementationOnce(successfulAssetsPromise)
        .mockImplementationOnce(successfulValuationsPromise);
    const data = await getAssetAndQuotations(coinMarketUrl, 'GET');
    expect(data).toEqual(enrichedValues);
});

test('should return an error when the first request fails', async () => {
    request.mockImplementationOnce(rejectedPromise);
    await expect(getAssetAndQuotations(coinMarketUrl, 'GET')).rejects.toEqual(error);
});

test('should return an error when the second request fails', async () => {
    request
        .mockImplementationOnce(successfulAssetsPromise)
        .mockImplementationOnce(rejectedPromise);
    await expect(getAssetAndQuotations(coinMarketUrl, 'GET')).rejects.toEqual(error);
});
