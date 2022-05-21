const { readFile, writeFile } = require('fs').promises;
const { HTTP_INTERNAL_ERROR_STATUS } = require('../httpStatusCodes');

const writeData = async (req, res, next) => {
  try {
    const prevTalkers = await readFile('talker.json', 'utf-8');
    const newTalkers = JSON.parse(prevTalkers);
    newTalkers.push({ ...req.body, id: newTalkers.length + 1 });
    await writeFile('talker.json', JSON.stringify(newTalkers));
  } catch (err) {
    return res.status(HTTP_INTERNAL_ERROR_STATUS).json({ Erro_ao_escrever: err.message });
  }
  next();
};

module.exports = writeData;