const mongoose = require('mongoose');
require('dotenv').config()

const {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

if(MONGO_HOSTNAME == undefined)
  throw new Error("Invalid node hostname.");

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  console.log('MongoDB is connected');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
