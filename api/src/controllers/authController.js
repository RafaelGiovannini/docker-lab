const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { usuario } = req.body;


        if (await User.findOne({ usuario }))
            return res.status(400).send({ message: 'usuario ja existe' })

        const user = await User.create(req.body);

        return res.send({ user })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Falha ao registrar um usuário' })
    }
});


router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao registrar um usuário' })
    }
});



router.post('/login', async (req, res) => {
    try {
        const {usuario, senha} = req.body;
        const user = await User.findOne({usuario, senha})

        if(!user)
        return res.status(400).send({message:'Usuario nao encontrado'})

        return res.send({ user })

    } catch (err) {
        return res.status(400).send({ message: 'Falha ao registrar um usuário' })
    }
});

module.exports = app => app.use('/auth', router)