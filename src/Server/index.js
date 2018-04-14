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

https.createServer(options, app).listen(443);

// const port = 3001;

// const server = app.listen(port, () => {
//     console.log('App listening at port %s', port);
// });

