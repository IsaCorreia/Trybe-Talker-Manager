const readData = require('./readData');
const writeData = require('./writeData');

const editData = async (id, data) => {
  try {
    const prevTalkers = await readData();
    const newTalker = { id: +prevTalkers.length, ...data };
    const newTalkersString = JSON.stringify(
      prevTalkers.map((talker) => (+talker.id === +id ? newTalker : talker)),
    );
    writeData(newTalkersString);
  } catch (err) {
    throw Error({ Erro_ao_editar_palestrantes: err.message });
  }
};

module.exports = editData;
