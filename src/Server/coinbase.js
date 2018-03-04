import { Client } from 'coinbase';

const client = new Client({
    'apiKey': process.env.COINBASE_KEY,
    'apiSecret': process.env.COINBASE_SECRET
});

const mapAccountsToAssets = accounts => {
    return accounts.map(account => {
        return {
            "asset": account.balance.currency,
            "free": account.balance.amount,
            "locked": "0.00000000",
            "price_eur": account.native_balance.amount
        }
    }).filter(asset => parseFloat(asset.free, 10) > 0);
}

const getCoinbaseBalance = () => {
    return new Promise((resolve, reject) => {
        client.getAccounts({}, (err, accounts)  => {
            if (err) {
                reject(err)
            }
            resolve(mapAccountsToAssets(accounts));
        });
    });
};

export default getCoinbaseBalance;
