const { HTTP_UNAUTHORIZED_STATUS } = require('../httpStatusCodes');

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;
  const TOKEN_FORMAT = new RegExp(/[^&]{16,16}/);
  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({
      message: 'Token não encontrado',
    });
  }
  if (!TOKEN_FORMAT.test(authorization)) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({
      message: 'Token inválido',
    });
  }
  next();
};

module.exports = tokenAuth;
