import crypto from 'crypto';

const urlBuilders = {
    createBinanceUrl() {
        const timestamp = new Date().getTime();
        const string = `&recvWindow=20000&timestamp=${timestamp}`;

        const hash = crypto.createHmac('sha256', process.env.BINANCE_SECRET).update(string).digest('hex');
        return `https://api.binance.com/api/v3/account?signature=${hash}&recvWindow=20000&timestamp=${timestamp}`;
    }
}

export default urlBuilders;
