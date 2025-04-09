const { body } = require('express-validator');

exports.orderValidation = [
  body('productIds')
    .isArray({ min: 1 }).withMessage('At least one product is required'),
  body('productIds.*')
    .isInt().withMessage('Each productId must be an integer'),
  body('totalAmount')
    .isFloat({ gt: 0 }).withMessage('Total amount must be greater than 0'),
];
