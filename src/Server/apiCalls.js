import getBinanceAssets from './binanceAssets';
import getCoinbaseBalance from './coinbaseBalance';
import { mergeSameAssets } from '../utils/helpers';

const getAssetAndQuotations = async () => {
    const coinbaseAssets = await getCoinbaseBalance();
    const binanceAssets = await getBinanceAssets();
    const duplicatedAssets = binanceAssets.concat(coinbaseAssets);
    const dedupAssets = mergeSameAssets(duplicatedAssets);
    return dedupAssets;
};

export default getAssetAndQuotations;

