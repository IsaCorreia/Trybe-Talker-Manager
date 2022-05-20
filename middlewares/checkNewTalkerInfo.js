const { HTTP_BAD_REQUEST_STATUS } = require('../httpStatusCodes');

const checkName = (res, name) => {
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
};

const checkAge = (res, age) => {
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
};

const checkWatch = (res, watchedAt) => {
  const DATA_FORMAT = new RegExp(/[0-31]{2,2}\/[0-12]{2,2}\/[0-9999]{4,4}/);

  if (!DATA_FORMAT.test(watchedAt)) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
};

const checkRate = (res, rate) => {
  if (rate < 1 || rate > 5) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
};

const checkTalk = (res, talk) => {
  if (!talk) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  const { watchedAt, rate } = talk;

  if (!watchedAt || !rate) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  checkRate(res, rate);
  checkWatch(res, watchedAt);
};

const checkNewTalkerInfo = (req, res, next) => {
  const { name, age, talk } = req.body;
  checkName(res, name);
  checkAge(res, age);
  checkTalk(res, talk);

  next();
};

module.exports = checkNewTalkerInfo;
