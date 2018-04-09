import express from 'express';
import getAssetAndQuotations from './apiCalls';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


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
    const manifest = require('../../build/asset-manifest.json'); // eslint-disable-line global-require,import/no-unresolved
    clientJSBundle = manifest[clientJSBundle]; // eslint-disable-line
    clientCSSBundle = manifest[clientCSSBundle]; // eslint-disable-line
  }

  res.status(200).send(`<!DOCTYPE html>
                          <html lang="en" class="reith-sans-font reith-serif-font">
                            <head>
                              <meta charset="utf-8">
                              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                              <title>Optimo</title>
                              <link rel="stylesheet" href="/${clientCSSBundle}"></script>
                            </head>
                            <body>
                              <noscript>
                                You need to enable JavaScript to run this app.
                              </noscript>
                              <div id="root"></div>
                              <script src="/${clientJSBundle}"></script>
                            </body>
                          </html>`);
});
export default app;
