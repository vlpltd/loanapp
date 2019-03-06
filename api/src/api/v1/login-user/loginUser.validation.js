const Joi = require('joi');

exports.loginUser = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
};
