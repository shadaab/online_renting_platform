const node_server = require('./servers/node_server'),
mongo_init = require('./servers/mongo_server');


(async () => {
    try {  
        node_server.node_init;
      // Once started, connect to Mongo through Mongoose
      mongo_init.mongoConnection();
      console.log(`Server running...`);
    }
    catch (err) {  
      console.log(err)
    }
  })();