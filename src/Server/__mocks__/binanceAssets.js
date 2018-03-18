const binanceResult = [
    {"asset": "BTC", "free": "1.00000000", "locked": "0.00000000", "price_eur": "8098.11"},
];

const successfulBinancePromise = jest.fn(() => Promise.resolve(binanceResult));

export default successfulBinancePromise;

