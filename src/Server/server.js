import express from 'express';
import getAssetAndQuotations from './apiCalls';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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
    getAssetAndQuotations()
        .then(response => res.status(200).send(response))
        .catch(err => res.send(err));
});

export default app;
