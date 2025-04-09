const { body } = require('express-validator');

exports.productValidation = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
  body('quantity').isInt({ gt: -1 }).withMessage('Quantity must be 0 or more'),
];