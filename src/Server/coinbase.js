import coinbase from 'coinbase';
const client = new coinbase.Client({'apiKey': '123', 'apiSecret': '345'});

const getCoinbaseBalance = () => {
    return client.getAccount('account', (err, account) => {
        console.log('bal: ' + account.balance.amount + ' currency: ' + account.balance.currency);
    });
};

export default getCoinbaseBalance;
