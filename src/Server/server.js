import express from 'express';
import getAssetAndQuotations from './apiCalls';
import bodyParser from 'body-parser';
import path from 'path';
import { createServer } from 'http';

const app = express();
app.use(express.static(path.join(__dirname, '..', 'build')));
console.log(path.join(__dirname, 'build'), "PAPAPAPAPAPAAPAPAPAAPAPAPA");

app.set('trust proxy', true);
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

app.get('*', (req, res) => {
  let clientJSBundle = 'main.js';
  let clientCSSBundle = 'main.css';
  if (process.env.NODE_ENV === 'production') {
    const manifest = require('../../build/asset-manifest.json');
    clientJSBundle = manifest[clientJSBundle];
    clientCSSBundle = manifest[clientCSSBundle];
  }

  res.status(200).send(`<!DOCTYPE html>
                          <html lang="en" class="reith-sans-font reith-serif-font">
                            <head>
                              <meta charset="utf-8">
                              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                              <title>Crypto-App</title>
                              <link rel="stylesheet" href="/${clientCSSBundle}"></script>
                            </head>
                            <body>
                              <p>Rocco</p>
                              <noscript>
                                You need to enable JavaScript to run this app.
                              </noscript>
                              <div id="root"></div>
                              <script src="/${clientJSBundle}"></script>
                            </body>
                          </html>`);
});

const server = createServer(app);
export default server;
