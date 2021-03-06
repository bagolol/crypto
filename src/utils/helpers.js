import groupBy from 'lodash.groupby';

const filterOwned = (currencies => currencies.filter(currency => {
    return parseFloat(currency.free, 10) > 0;
}));

const enrichAssets = ((assets, valuations) => {
  const values = []
    valuations.forEach(valuation => {
        assets.forEach(asset => {
            if(valuation.symbol === asset.asset) {
                const amount = parseFloat(asset.free, 10).toFixed(4);
                const euroQuotation = parseFloat(valuation.price_eur, 10);
                const euroValue = amount * euroQuotation;
                values.push(Object.assign(
                    {},
                    asset,
                    { free: amount },
                    { price_eur: euroValue.toFixed(2) }
                ));
            }
        });
    })
    return values;
});

const mergeAssetValue = (asset1, asset2) => Object.assign(
    {},
    asset1,
    {
        free: (parseFloat(asset1.free) + parseFloat(asset2.free)).toFixed(3),
        price_eur: (parseFloat(asset1.price_eur, 10) + parseFloat(asset2.price_eur, 10)).toFixed(2)
    }
);

const mergeSameAssets = (assets) =>
    Object.values(groupBy(assets, 'asset'))
    .map(el => el.reduce(mergeAssetValue));

export {
    filterOwned,
    enrichAssets,
    mergeSameAssets
};
