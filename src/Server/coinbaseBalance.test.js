import getCoinbaseBalance from './coinbaseBalance';
import { Client } from 'coinbase';

jest.mock('coinbase', () => {
    const getAccounts = jest.fn();
    return { Client: jest.fn(() => ({ getAccounts }))}
});

const coinbase = new Client();

const coinbaseResult = [
    { balance: { currency: 'ETH', amount: '0.001' }, native_balance: { amount: '0.1' } }
]

const expectedResult = [{"asset": "ETH", "free": "0.001", "locked": "0.00000000", "price_eur": "0.1"}];
const rejected = jest.fn();

test('should return only the owned assets', async () => {
    coinbase.getAccounts.mockImplementation(({}, cb) => cb(false, coinbaseResult));
    const result = await getCoinbaseBalance();
    expect(result).toEqual(expectedResult);
    expect(coinbase.getAccounts).toHaveBeenCalled();
});

test('should return a rejected promise if there is an error', async () => {
    coinbase.getAccounts.mockImplementation(({}, cb) => cb(true));
    expect(getCoinbaseBalance()).rejects.toEqual(true);
    expect(coinbase.getAccounts).toHaveBeenCalled();
});


