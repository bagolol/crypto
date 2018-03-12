import { filterOwned, enrichAssets } from './helpers';

const binanceResponse = { balances: [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"AST","free":"0.00000000","locked":"0.00000000"}]
};

const assets = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"}
];

const enrichedAssets = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000","price_eur": "8098.11"}
];

const valuations = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "price_eur": "8098.1094044",
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "price_eur": "750.47210504",
    }
];


test('should filter only owned currencies', () => {
    expect(filterOwned(binanceResponse.balances)).toEqual(assets);
});

test('should enrich assets with EUR valuation', () => {
    expect(enrichAssets(assets, valuations)).toEqual(enrichedAssets);
});
