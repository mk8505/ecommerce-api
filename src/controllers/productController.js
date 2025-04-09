const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }

};

exports.getProducts = async (req, res) => {

  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};