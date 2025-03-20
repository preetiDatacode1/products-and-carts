const Product = require('../models/product');
const ApiFeatures = require('../utils/apiFeatures');


exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const features = new ApiFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const products = await features.query;
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get Single Product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'Product not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { ids } = req.query; 
    if (ids) {

      await Product.deleteMany({ 
        _id: { 
        $in: ids.split(',') 
      } 
    });
    } else {
      await Product.findByIdAndDelete(req.params.id);
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