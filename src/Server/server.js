import express from 'express';
import urlBuilders from './urlBuilder';
import { callApi } from './requester';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('ok');
});

app.get('/binance', (req, res) => {
    const binanceUrl = urlBuilders.getBinanceAssets(); 
    callApi(binanceUrl, 'GET')
        .then(assets => res.status(200).send(assets))
        .catch(err => {
            res.send(err);
        });
});

const server = app.listen(port, () => {
    console.log('App listening at port %s', port);
});

module.exports = server;
