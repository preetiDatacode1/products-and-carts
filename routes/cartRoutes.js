const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.route('/cart')
  .get(cartController.getCartItems)
  .post(cartController.addToCart)
  .delete(cartController.removeFromCart);

router.route('/cart/:id')
  .patch(cartController.updateCartItem);

module.exports = router;