const coinbaseResult = [
    {"asset": "ETH", "free": "1.00000000", "locked": "0.00000000", "price_eur": "10"}
];
const successfulCoinbasePromise = jest.fn(() => Promise.resolve(coinbaseResult))
export default successfulCoinbasePromise;


