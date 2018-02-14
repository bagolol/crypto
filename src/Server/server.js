import express from 'express';
import urlBuilders from './urlBuilder';
import { callApi } from './requester';

const app = express();

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

export default app;
