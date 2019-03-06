const httpStatus = require('http-status');
const postgresql = require('../../../services/postgresql');
const Response = require('../../../utils/response');
const { generateError } = require('../../../utils/APIError');
const {
  routes,
  services,
  codes,
  getErrorCode
} = require('../../../utils/ErrorCode');

/**
 * createUser
 * @public
 */
exports.createUser = async (req, res, next) => {
  try {
    const params = {
      username: req.body.username,
      password: req.body.password
    }
    postgresql.createUser(params).then((data) => {
      const jsonResponse = Response(httpStatus.OK, data);
      res.status(httpStatus.OK);
      return res.json(jsonResponse);
    }).catch((error) => {
      const errorMsg = generateError(
        'createUser',
        getErrorCode(routes.createUser, services.sample, codes.createUserError),
        error.message,
        {
        }
      );
      errorMsg.status = httpStatus.BAD_REQUEST;
      return next(errorMsg);
    })
  } catch (ex) {
    return next(ex)
  }
};
