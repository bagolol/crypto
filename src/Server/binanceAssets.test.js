import getBinanceAssets from './binanceAssets';
import requestAsPromise from './requester';
import urlBuilders from './urlBuilder';
import {
    enrichAssets,
    filterOwned,
} from '../utils/helpers';
import getEurQuotations from './euroQuotations';

jest.mock('./urlBuilder');
jest.mock('./requester');
jest.mock('./euroQuotations');
jest.mock('../utils/helpers');


urlBuilders.createBinanceUrl = jest.fn();


test('should call createBinanceUrl each time', () => {
    getBinanceAssets();
    expect(urlBuilders.createBinanceUrl).toHaveBeenCalled();
})

test('should filter and enrich assets', () => {
    getBinanceAssets();
    expect(enrichAssets).toHaveBeenCalled();
    expect(filterOwned).toHaveBeenCalled();
})

// test('should not filter or enrich assets if a call fails', async () => {
//     getEurQuotations.mockImplementationOnce(binanceFailure);
//     await getBinanceAssets()
//     expect(enrichAssets).not.toHaveBeenCalled();
//     expect(filterOwned).not.toHaveBeenCalled();
// })
