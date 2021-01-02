const HAPI = require('hapi'),
config= require('../config/config.json'),
routes = require('../src/routes/routes');

let serverOptions = {
    port: config.server.port,
    host: config.server.host,
}

let server = new HAPI.Server(serverOptions);


// bind routes

for (const route in routes) {
    server.route(routes[route]);
}

const initialize =  async () =>{

    await server.start();
    console.log('Server running !!');

};


module.exports = {
    init : initialize
}
