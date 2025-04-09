const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/orderController');
const auth = require('../middlewares/auth');
const { orderValidation } = require('../validations/orderValidation');
const validate = require('../middlewares/validate');

router.post('/', auth, orderValidation, validate, placeOrder);

module.exports = router;