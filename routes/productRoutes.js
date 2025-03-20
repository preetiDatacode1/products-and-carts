<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product Routes
router.route('/products')
.get(productController.getAllProducts)
.post(productController.createProduct);

router.route('/products/:id')
.get(productController.getProductById)
.patch(productController.updateProduct)
.delete(productController.deleteProduct);

=======
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product Routes
router.route('/products')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route('/products/:id')
  .get(productController.getProductById)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

>>>>>>> 5417ad366a3d5078390286ca8c87b84794fbd974
module.exports = router;