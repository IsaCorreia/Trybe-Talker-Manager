const { readFileSync } = require('fs');
const writeData = require('./writeData');

const deleteData = (id) => {
  try {
    const data = readFileSync('talker.json', 'utf-8');
    const talkersObj = JSON.parse(data);
    const filteredTalkers = talkersObj.filter((talker) => +talker.id !== +id);
    const filteredTalkersSting = JSON.stringify(filteredTalkers);
    writeData(filteredTalkersSting);
  } catch (err) {
    throw Error({ Erro_ao_deletar: err.message });
  }
};

module.exports = deleteData;
