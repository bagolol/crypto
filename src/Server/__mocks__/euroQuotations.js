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

const getEuroQuotations = jest.fn(() => Promise.resolve(valuations));

export default getEuroQuotations;
