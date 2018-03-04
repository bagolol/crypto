import getAssetAndQuotations from './apiCalls';
import request from './requester';
import getCoinbaseBalance from './coinbase';

jest.mock('./requester');
jest.mock('./coinbase');

const binanceResponse = JSON.stringify({ balances: [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"AST","free":"0.00000000","locked":"0.00000000"}]
});


const valuations = JSON.stringify([
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
]);

const enrichedValues = [
    {"asset": "BTC", "free": "1.00000000", "locked": "0.00000000", "price_eur": "8098.1094044"}
];

const error = { error: "Unable to retrieve assets" };
const rejectedPromise = jest.fn(() => Promise.reject(error));
const successfulAssetsPromise = jest.fn(() => Promise.resolve(binanceResponse));
const successfulValuationsPromise = jest.fn(() => Promise.resolve(valuations));

const testUrl = 'https://api.test.com';

test('should get assets and their EUR quotations', async (done) => {
    request
        .mockImplementationOnce(successfulAssetsPromise)
        .mockImplementationOnce(successfulValuationsPromise);
    const data = await getAssetAndQuotations(testUrl, 'GET');
    expect(data).toEqual(enrichedValues);
    done();
});

test('should return an error when the first request fails', async (done) => {
    request.mockImplementationOnce(rejectedPromise);
    await expect(getAssetAndQuotations(testUrl, 'GET')).rejects.toEqual(error);
    done();
});

test('should return an error when the second request fails', async (done) => {
    request
        .mockImplementationOnce(successfulAssetsPromise)
        .mockImplementationOnce(rejectedPromise);
    await expect(getAssetAndQuotations(testUrl, 'GET')).rejects.toEqual(error);
    done();
});

test('should call coinbase to get the existing assets', async (done) => {
    request
        .mockImplementationOnce(successfulAssetsPromise)
        .mockImplementationOnce(successfulValuationsPromise);
    await getAssetAndQuotations(testUrl, 'GET');
    expect(getCoinbaseBalance).toHaveBeenCalled();
    done();
});


