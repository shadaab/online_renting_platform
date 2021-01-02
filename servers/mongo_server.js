const mongoose = require('mongoose'),
 config = require('../config/config.json');


exports.mongoConnection = () => {

    let connection_uri = `mongodb://${config.database.mongo.host}/${config.database.mongo.name}`;
    
    mongoose.connect(connection_uri,{ useNewUrlParser: true });

    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open ' + connection_uri);
    });

    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });


    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

};