const router = require('express').Router();

const coinbase = require('./coinbase');

router.use('/coinbase', coinbase)

module.exports = router;