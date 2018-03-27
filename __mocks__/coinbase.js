const getAccounts = jest.fn();
const coinbase = jest.genMockFromModule('coinbase');
coinbase.Client = jest.fn(() => ({ getAccounts }));

module.exports = coinbase;
