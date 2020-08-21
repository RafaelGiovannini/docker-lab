const router = require('express').Router();

const controller = require('../controllers/authController');

router.post('/register', controller.registry);

router.post('/login', controller.auth);

router.get('/user/:id', controller.getUser);

module.exports = router;