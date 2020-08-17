// app.get('/gato/', (req, res) => {
//     res.send({ gato: `Miauuuuu` })
// });

// app.get('/gato/:id', (req, res) => {
//     res.sendFile(__dirname + '/src/img/100.jpeg')
// });

const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/gato/', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'error' })
    }
});

router.get('/gato/:id', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'error' })
    }
});


module.exports = app => app.use('/home', router)