const { HTTP_BAD_REQUEST_STATUS } = require('../httpStatusCodes');

const hasCredentials = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password) {
    return res
      .status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

const validateCredentials = (req, res, next) => {
  const { email, password } = req.body;
  const EMAIL_MODEL = /@./;
  const PASSWORD_MODEL = /....../;

  if (!EMAIL_MODEL.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  if (!PASSWORD_MODEL.test(password)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
  next();
};

module.exports = { hasCredentials, validateCredentials };
