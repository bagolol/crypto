import request from 'request';

const callApi = (url, method) => {
    var options = {
        uri: url,
        method: method,
        headers: {
            'X-MBX-APIKEY': process.env.BINANCE_API
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if(err) reject(err);
            resolve(body)
        });
    });
};

export {
    callApi
};
