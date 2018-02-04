import request from 'supertest';

jest.mock('./urlBuilder');
// jest.mock('./requester');

const binanceUrl = 'https://api.binance.com/api/v3/account?signature=74d554d12b7929d226aaa6f033ce53f2e6b537dc3291561cf234e24921db5905&recvWindow=20000&timestamp=1517077228588';

describe('loading express', () => {
    let server;
    let urlBuilders;
    let callApi;

    beforeEach(() => {
        server = require('./server');
        urlBuilders = require('./urlBuilder');
        // callApi = require('./requester');
    });

    afterEach(() => {
        server.close();
        jest.resetAllMocks();
    });

    test('responds to /', (done) => {
        request(server)
            .get('/')
            .expect(200, done);
    });

    test('should build the binance url when /binance', async (done) => {
        const { status, response } = await request(server).get('/binance');
        // expect(status).toBe(200);
        expect(urlBuilders.getBinanceAssets).toHaveBeenCalled();
        done();
    });

    test('should send a request to binance when /binance', async (done) => {
        urlBuilders.getBinanceAssets = jest.fn(() => binanceUrl);
        const binanceResponse = {bitcoins: 3};
        nock('https://api.binance.com')
            .get(/api(.*)/)
            .reply(200, binanceResponse);
        const { status, text } = await request(server).get('/binance');
        expect(status).toBe(200);
        expect(JSON.parse(text)).toEqual(binanceResponse)
        done();
    });

});
