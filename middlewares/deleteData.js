const { readFileSync } = require('fs');
const { HTTP_INTERNAL_ERROR_STATUS } = require('../httpStatusCodes');

const deleteData = (req, res, next) => {
  try {
    const { id } = req.params;
    const data = readFileSync('talker.json', 'utf-8');
    const filteredTalkers = data.filter((talker) => talker.id !== id);
    console.log(filteredTalkers);
  } catch (err) {
    return res.status(HTTP_INTERNAL_ERROR_STATUS).json({ Erro_ao_deletar: err.message });
  }
  next();
};

module.exports = deleteData;
