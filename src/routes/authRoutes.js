const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');
const { signupValidation, signinValidation } = require('../validations/authValidation');
const validate = require('../middlewares/validate');

router.post('/signup', signupValidation, validate, signup);
router.post('/signin', signinValidation, validate, signin);

module.exports = router;