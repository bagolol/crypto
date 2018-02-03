const crypto = require('crypto');
var secret = "Q0k0aoQTl3rrrdKX6PzVnGoA0aQDpEGhjcf7nJVUrcimEnyITCaeLcdWlC1m0P9z";

var timestamp = new Date().getTime();
var string = `&recvWindow=20000&timestamp=${timestamp}`;

const hash = crypto.createHmac('sha256', secret).update(string).digest('hex');
const url = `https://api.binance.com/api/v3/account?signature=${hash}&recvWindow=20000&timestamp=${timestamp}`;
console.log(url);

