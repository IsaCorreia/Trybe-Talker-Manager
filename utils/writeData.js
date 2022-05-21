const { writeFile } = require('fs').promises;

const writeData = (data) => {
  try {
    writeFile('talker.json', data, (err) => {
      if (err) throw err;
    });
  } catch (err) {
    console.log({ Erro_ao_escrever: err.message });
  }
};

module.exports = writeData;