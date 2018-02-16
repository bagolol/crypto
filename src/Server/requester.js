import request from 'request';

const requestAsPromise = (options) => {
    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if(err) reject(err);
            resolve(body)
        });
    });
};

export default requestAsPromise;

