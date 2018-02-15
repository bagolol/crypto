import { filterOwned } from './helpers';

const binanceResponse = { balances: [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"AST","free":"0.00000000","locked":"0.00000000"}]
};

const expected = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"}
];



test('should filter only owned currencies', () => {
    expect(filterOwned(binanceResponse.balances)).toEqual(expected);
});

