var express     = require('express'), 
    configure   = require('./config'),
    routes      = require('./routes'),
    sockets     = require('./sockets');

module.exports = function(){
    var app = express.createServer(express.logger());
    
    configure(app);
    routes(app);
    sockets(app);
    
    return app;
};