export const Client = jest.fn(() => ({ getAccounts: getAccountsMock}));

const mock = jest.fn().mockImplementation(() => {
  return { Client };
});
const coinbaseResult = [
    { balance: { currency: 'ETH', amount: '0.001' }, native_balance: { amount: '0.1' } }
]

const getAccountsMock = jest.fn(({}, cb) => cb(true, coinbaseResult));

export default mock;
