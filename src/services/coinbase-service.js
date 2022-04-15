const axios = require('axios');

const client = axios.create({
  baseURL: 'https://api.coinbase.com/v2'
});

class CoinbaseService {
  static async getCurrencies() {
    try {
      const response = await client.get('currencies');
      return response;
    } catch (err) {
      throw new Error('failed request')
    }
  }
}

/**
 * Expose Service
 */
module.exports = CoinbaseService;
