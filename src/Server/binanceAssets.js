import requestAsPromise from './requester';
import urlBuilders from './urlBuilder';
import {
    enrichAssets,
    filterOwned,
    mergeSameAssets
} from '../utils/helpers';
import getEurQuotations from './euroQuotations';


const getBinanceAssets = async () => {
    const options = {
        uri: urlBuilders.getBinanceAssets(),
        method: 'GET',
        headers: {
            'X-MBX-APIKEY': process.env.BINANCE_API
        }
    };
    const assets = await requestAsPromise(options);
    const ownedAssets = filterOwned(assets.balances);
    const quotations = await getEurQuotations();
    return enrichAssets(ownedAssets, quotations);
};

export default getBinanceAssets;

