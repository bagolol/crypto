import getCoinbaseBalance from './coinbaseBalance';
import { Client } from 'coinbase';

jest.mock('coinbase');

const coinbase = Client();
const expectedResult = [{"asset": "ETH", "free": "0.001", "locked": "0.00000000", "price_eur": "0.1"}];

const rejected = jest.fn().mockImplementation(cb => {
  cb(true, { history: [1, 2, 3]})
  })
test('should return only the owned assets', async () => {
    const result = await getCoinbaseBalance();
    expect(result).toEqual(expectedResult);
    expect(coinbase.getAccounts).toHaveBeenCalled();
});

// test('should return a rejected promise if there is an error', async () => {
//     coinbase.getAccounts = rejected;
//     const result = await getCoinbaseBalance();
//     expect(result).toEqual(expectedResult);
//     expect(coinbase.getAccounts).toHaveBeenCalled();
// });


