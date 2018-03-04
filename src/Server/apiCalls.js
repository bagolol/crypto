import requestAsPromise from './requester';
import getCoinbaseBalance from './coinbase';
import {
    enrichAssets,
    filterOwned,
    mergeSameAssets
} from '../utils/helpers';

const coinMarketUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=300';

const getEurQuotations = (url, method) => {
    const options = {
        uri: url,
        method: method
    }
    return requestAsPromise(options);
};

const getAssetAndQuotations = async (url, method) => {
    const options = {
        uri: url,
        method: method,
        headers: {
            'X-MBX-APIKEY': process.env.BINANCE_API
        }
    };
    // add another layer so that you can mock the responses of the two functions and not of request
    const assets = JSON.parse(await requestAsPromise(options));
    const ownedAssets = filterOwned(assets.balances);
    const coinbaseAssets = await getCoinbaseBalance();
    const quotations = JSON.parse(await getEurQuotations(coinMarketUrl, 'GET'));
    const binanceAssets = enrichAssets(ownedAssets, quotations);
    const duplicatedAssets = binanceAssets.concat(coinbaseAssets);
    const dedupAssets = mergeSameAssets(duplicatedAssets);
    return dedupAssets;
};

export default getAssetAndQuotations;

