import requestAsPromise from './requester';

const coinMarketUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=300';

const options = {
    uri: coinMarketUrl,
    method: 'GET'
}

const getEurQuotations = () => requestAsPromise(options);

export default getEurQuotations;

