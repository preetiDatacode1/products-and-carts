const Cart = require('../models/cart');
const Product = require('../models/product');

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found',
      });
    }
    const cartItem = await Cart.create({ productId, quantity });
    res.status(201).json({
      status: 'success',
      data: {
        cartItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get Cart Items (with Population)
exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate({
      path: 'productId', // Populate productId
      select: 'title price', // Only include title and price of the product
    });
    res.status(200).json({
      status: 'success',
      results: cartItems.length,
      data: {
        cartItems,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Update Cart Item (PATCH)
exports.updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true, runValidators: true }
    ).populate({
      path: 'productId', // Populate productId
      select: 'title price', // Only include title and price of the product
    });

    if (!cartItem) {
      return res.status(404).json({
        status: 'fail',
        message: 'Cart item not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        cartItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Remove from Cart (Optional Query Params)
exports.removeFromCart = async (req, res) => {
  try {
    const { ids } = req.query; 
    if (ids) {
      await Cart.deleteMany({ _id: { $in: ids.split(',') } });
    } else {
      await Cart.findByIdAndDelete(req.params.id);
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};