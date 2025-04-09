const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { productIds, totalAmount } = req.body;
    const order = await Order.create({
      productIds,
      totalAmount,
      UserId: req.user.id,
    });
    res.status(201).json({ message: 'User created', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};