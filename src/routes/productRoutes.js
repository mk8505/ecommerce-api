const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('../controllers/productController');
const auth = require('../middlewares/auth');
const { productValidation } = require('../validations/productValidation');
const validate = require('../middlewares/validate');

router.post('/', auth, productValidation, validate, addProduct);
router.get('/', getProducts);

module.exports = router;