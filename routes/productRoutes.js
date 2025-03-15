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

module.exports = router;