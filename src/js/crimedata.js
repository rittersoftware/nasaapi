let unirest = require('unirest');
let config = require('config');
let microserviceConfig = config.get('microservice.config');

// These code snippets use an open-source library. http://unirest.io/nodejs
unirest.get("https://jgentes-Crime-Data-v1.p.mashape.com/crime?enddate=9%2F25%2F2015&lat=37.757815&long=-122.5076392&startdate=9%2F19%2F2015")
    .header("X-Mashape-Key", "WLCAyFwkESmshwFqB4kQPcbiYRepp1vdxkhjsnAS1dm23p90HE")
    .header("Accept", "application/json")
    .end(function (result) {
        console.log(result.body);
    });