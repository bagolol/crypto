jest.mock('./requester');

import getAssetAndQuotations from './apiCalls';

const enrichedValues = [
    {"asset":"BTC","free":"1.00000000","EUR":"1"},
    {"asset":"LTC","free":"1.00000000","EUR":"1"}
];


const coinMarketUrl = 'https://api.coinmarketcap.com';

test('should call request', async () => {
    expect.assertions(1);
    const data = await getAssetAndQuotations(coinMarketUrl, 'GET');
    expect(data).toEqual(enrichedValues);
});
