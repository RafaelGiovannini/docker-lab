const express = require('express');
const router = express.Router();
const path = require('path'); 


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

router.get('/gato/', (req, res) => {
    const randomid = randomIntFromInterval(1, 15)

    filepath = path.join(__dirname, '../../src/img/'+randomid+'.jpg');

    res.sendFile(filepath);
  });


module.exports = app => app.use('/home', router)