const values = [
    {"asset":"BTC","free":"1.00000000","locked":"0.00000000"},
    {"asset":"LTC","free":"1.00000000","locked":"0.00000000"}
];

const request = jest.fn(() => Promise.resolve(values));

export default request;
