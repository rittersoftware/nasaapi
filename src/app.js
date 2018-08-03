let express = require('expressjs');
let config = require('config');
let microserviceConfig = config.get('microservice.config');
let app = express();

var server = app.listen(microserviceConfig.port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Server running on: ${host};${port}`);
})