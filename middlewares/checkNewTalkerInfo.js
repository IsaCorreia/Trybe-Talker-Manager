const { HTTP_BAD_REQUEST_STATUS } = require('../httpStatusCodes');

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "name" é obrigatório',
    });
  }
  if (name.length < 3) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
  next();
};

const checkAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "age" é obrigatório',
    });
  }
  if (age < 18) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  next();
};

const checkTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  next();
};

const checkRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (!rate) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (rate < 1 || rate > 5) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
  next();
};

const checkWatch = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (!watchedAt) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  const DATA_FORMAT = /(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/([0-2]\d\d\d)/;
  if (!DATA_FORMAT.test(watchedAt)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

module.exports = { checkName, checkAge, checkTalk, checkWatch, checkRate };
