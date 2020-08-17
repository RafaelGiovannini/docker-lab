const mongoose = require('mongoose');
require('dotenv').config()

const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;
  
  console.log(MONGO_HOSTNAME)
  
  const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

  mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }).then( function() {
    console.log('MongoDB is connected');
  })
    .catch( function(err) {
    console.log(err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
