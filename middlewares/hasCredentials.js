const {
  HTTP_BAD_REQUEST_STATUS,
  HTTP_INTERNAL_ERROR_STATUS,
} = require('../httpStatusCodes');

const validateCredentials = (res, email, password) => {
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
};

const hasCredentials = (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "email" é obrigatório' });
    }
    if (!password) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "password" é obrigatório' });
    }
    validateCredentials(res, email, password);
  } catch (err) {
    return res.status(HTTP_INTERNAL_ERROR_STATUS)
      .json({ Erro_ao_logar: err.message });
  }
  next();
};

module.exports = hasCredentials;