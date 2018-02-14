import express from 'express';
import urlBuilders from './urlBuilder';
import { callApi } from './requester';
import bodyParser from 'body-parser';

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.status(200).send('ok');
});

app.get('/api/binance', (req, res) => {
    const binanceUrl = urlBuilders.getBinanceAssets();
    callApi(binanceUrl, 'GET')
        .then(response => res.status(200).send(response))
        .catch(err => {
            res.send(err);
        });
});

export default app;
