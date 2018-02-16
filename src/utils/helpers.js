const filterOwned = (currencies => currencies.filter(currency => {
    return parseFloat(currency.free, 10) > 0;
}));

const enrichAssets = ((assets, valuations) => {
  const values = []
    valuations.map(valuation => {
        assets.filter(asset => {
            if(valuation.symbol === asset.asset) {
                values.push(Object.assign(
                    {},
                    asset,
                    { price_eur: valuation.price_eur }
                ));
            }
        });
    })
    return values;
});

export {
    filterOwned,
    enrichAssets
};
