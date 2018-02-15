import request from 'request';

const getEurQuatations = () => {


}
const callApi = (url, method) => {
    const options = {
        uri: url,
        method: method,
        headers: {
            'X-MBX-APIKEY': process.env.BINANCE_API
        }
    };
    return new Promise((resolve, reject) => {
        console.log(request, 'REQUEST');
        request(options, (err, res, body) => {
            if(err) reject(err);
            resolve(body)
        });
    });
};

export {
    callApi
};
