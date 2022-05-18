const data = require('../talker.json');

const HTTP_NOT_FOUND_STATUS = 404;

const verifyDataContent = (req, res, next) => {
  console.log('estou no middleware!');
  if (!data.length) {
    console.log('data está vazio');
    res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
  next();
};

module.exports = verifyDataContent;