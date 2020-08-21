const router = require('express').Router();

const controller = require('../controllers/catController');

router.get('/', controller.cat);

module.exports = router;