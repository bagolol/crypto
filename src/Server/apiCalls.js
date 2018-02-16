import requestAsPromise from './requester';
import { enrichAssets, filterOwned } from '../utils/helpers';

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
    //devo farlo qui l'enrich? o sul browser?
    const assets = JSON.parse(await requestAsPromise(options));
    const ownedAssets = filterOwned(assets.balances);
    const quotations = JSON.parse(await getEurQuotations(coinMarketUrl, 'GET'));
    return enrichAssets(ownedAssets, quotations);
};

export default getAssetAndQuotations;
