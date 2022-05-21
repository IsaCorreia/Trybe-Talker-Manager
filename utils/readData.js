const { readFile } = require('fs').promises;
const { HTTP_INTERNAL_ERROR_STATUS } = require('../httpStatusCodes');

const readData = async (req, res) => {
  try {
    const data = await readFile('talker.json', 'utf-8');
    const talkers = JSON.parse(data);
    return talkers;
  } catch (err) {
    return res.status(HTTP_INTERNAL_ERROR_STATUS).json({ Erro_ao_ler_dados: err.message });
  }
};

module.exports = readData;