const { readFile } = require('fs').promises;

const readData = async () => {
  try {
    const data = await readFile('talker.json', 'utf-8');
    const talkers = JSON.parse(data);
    return talkers;
  } catch (err) {
    throw Error({ Erro_ao_ler_dados: err.message });
  }
};

module.exports = readData;