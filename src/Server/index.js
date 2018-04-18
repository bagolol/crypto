import app from './server';
import fs from 'fs';
import https from 'https';
import path from 'path';

const key = fs.readFileSync(path.resolve(__dirname + '/../crypto-key.pem'));
const cert = fs.readFileSync(path.resolve(__dirname + '/../crypto-cert.pem'))

const options = {
    key,
    cert
};

const server = https.createServer(options, app);

server.listen(3001, () => console.log('App listening at port %s', 3001));

