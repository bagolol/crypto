import request from 'supertest';
import getAssetAndQuotations from './apiCalls';
import { Client } from 'coinbase';

jest.mock('./urlBuilder');
jest.mock('./apiCalls');
jest.mock('coinbase');


const binanceUrl = 'https://api.binance.com/api/v3/account?signature=74d554d12b7929d226aaa6f033ce53f2e6b537dc3291561cf234e24921db5905&recvWindow=20000&timestamp=1517077228588';

const enrichedValues = [
    {"asset": "BTC", "free": "1.00000000", "locked": "0.00000000", "price_eur": "8098.1094044"}
];

describe('loading express', () => {
    let server;
    let urlBuilders;

    beforeEach(() => {
        server = require('./server').default;
        urlBuilders = require('./urlBuilder').default;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('responds to /', (done) => {
        request(server)
            .get('/')
            .expect(200, done);
    });

    test('should send a request to binance when /api/binance', async (done) => {
        const successfulPromise = jest.fn(() => Promise.resolve(enrichedValues));
        urlBuilders.getBinanceAssets = jest.fn(() => binanceUrl);
        getAssetAndQuotations.mockImplementationOnce(successfulPromise);
        const { status, text } = await request(server).get('/api/binance');
        expect(getAssetAndQuotations).toHaveBeenCalled();
        expect(status).toBe(200);
        expect(JSON.parse(text)).toEqual(enrichedValues)
        done();
    });

});
