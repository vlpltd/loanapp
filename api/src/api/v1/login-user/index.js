const express = require('express');
const validate = require('express-validation');
const controller = require('./loginUser.controller');
const validation = require('./loginUser.validation');

const router = express.Router();

router.route('/')
  .post(validate(validation.loginUser), controller.loginUser);

module.exports = router;