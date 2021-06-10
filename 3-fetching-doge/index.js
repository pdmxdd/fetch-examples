require('isomorphic-fetch');

const apiKey = require('./coin-api.json');
const KEY = apiKey.key;

// console.log(KEY);

fetch('https://rest-sandbox.coinapi.io/v1/assets?filter_asset_id=DOGE', {
    "method": "GET",
    "headers": new Headers({
        "X-CoinAPI-Key": KEY,
        "Accept": "application/json",
        "Accept-Encoding": "deflate, gzip"
    })
}).then(function(response) {
    response.json().then(function(json) {
        // console.log(json);
        const doge = json[0];
        console.log(doge.asset_id);
        console.log(doge.name);
        console.log(`$${doge.price_usd}`);
    });
});

// now that we have this data it's up to us to decide what to do with the data...