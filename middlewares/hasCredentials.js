const { HTTP_BAD_REQUEST_STATUS } = require('../httpStatusCodes');

const validateCredentials = (res, email, password) => {
  const validEmail = new RegExp(/@./);
  const validPassword = new RegExp(/....../);

  if (!validEmail.test(email)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  if (!validPassword.test(password)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
};

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
  validateCredentials(res, email, password);
  next();
};

module.exports = hasCredentials;
