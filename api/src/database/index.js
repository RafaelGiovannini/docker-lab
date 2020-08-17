const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/dockercat');
mongoose.Promise = global.Promise;

module.exports = mongoose;


// const mongoose = require('mongoose');

// const {
//   MONGO_USERNAME,
//   MONGO_PASSWORD,
//   MONGO_HOSTNAME,
//   MONGO_PORT,
//   MONGO_DB
// } = process.env;

// const options = {
//   useNewUrlParser: true,
//   reconnectTries: Number.MAX_VALUE,
//   reconnectInterval: 500,
//   connectTimeoutMS: 10000,
// };

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// mongoose.connect(url, options).then( function() {
//   console.log('MongoDB is connected');
// })
//   .catch( function(err) {
//   console.log(err);
// });