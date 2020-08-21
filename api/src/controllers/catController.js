const path = require('path');
const os = require("os");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.cat = (req, res) => {
  const randomid = randomIntFromInterval(1, 15)
  filepath = path.join(__dirname, '../../src/img/' + randomid + '.jpg');
  res.setHeader('source-server', os.hostname());
  res.setHeader('access-control-expose-headers', 'source-server');
  res.sendFile(filepath);
};