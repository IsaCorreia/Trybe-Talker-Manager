const {
  HTTP_UNAUTHORIZED_STATUS,
  HTTP_INTERNAL_ERROR_STATUS,
} = require('../httpStatusCodes');

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;
  const TOKEN_FORMAT = /[^&]{16,16}/;
  try {
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
  } catch (err) {
    return res.status(HTTP_INTERNAL_ERROR_STATUS).json({ Erro_ao_autenticar: err.message });
  }
  next();
};

module.exports = tokenAuth;
