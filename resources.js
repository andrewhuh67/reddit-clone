const express = require('express');
const router = express.Router();

router.use('/', require('./controllers/home'));
router.use('/auth', require('./controllers/auth'));

module.exports = router;