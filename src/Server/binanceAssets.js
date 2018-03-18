import requestAsPromise from './requester';
import urlBuilders from './urlBuilder';
import {
    enrichAssets,
    filterOwned,
} from '../utils/helpers';
import getEurQuotations from './euroQuotations';


const getBinanceAssets = async () => {
    const options = {
        uri: urlBuilders.createBinanceUrl(),
        method: 'GET',
        headers: {
            'X-MBX-APIKEY': process.env.BINANCE_API
        }
    };
    const assets = await requestAsPromise(options);
    const quotations = await getEurQuotations();
    const ownedAssets = filterOwned(assets.balances);
    return enrichAssets(ownedAssets, quotations);
};

export default getBinanceAssets;

