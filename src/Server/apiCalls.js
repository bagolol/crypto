import requestAsPromise from './requester';
import { enrichAssets } from '../utils/helpers';

const coinMarketUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=150';

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
    const assets = await requestAsPromise(options);
    const quotations = await getEurQuotations(coinMarketUrl, 'GET');
    return enrichAssets(assets, quotations);
};

export default getAssetAndQuotations;
