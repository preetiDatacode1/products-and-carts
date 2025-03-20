<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.route('/cart')
  .get(cartController.getCartItems)
  .post(cartController.addToCart)
  .delete(cartController.removeFromCart);

router.route('/cart/:id')
  .patch(cartController.updateCartItem);

=======
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Cart Routes
router.route('/cart')
  .get(cartController.getCartItems)
  .post(cartController.addToCart)
  .delete(cartController.removeFromCart);

router.route('/cart/:id')
  .patch(cartController.updateCartItem);

>>>>>>> 5417ad366a3d5078390286ca8c87b84794fbd974
module.exports = router;