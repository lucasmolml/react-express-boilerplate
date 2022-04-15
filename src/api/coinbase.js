const router = require('express').Router();
const CoinbaseService = require('../services/coinbase-service');


router.get('/currencies', async (req,res) => {
  try {
    const response = await CoinbaseService.getCurrencies();
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;