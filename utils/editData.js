const readData = require('./readData');
const writeData = require('./writeData');

const editData = async (id, data) => {
  const prevTalkers = await readData();
  const newTalker = { ...data, id: prevTalkers.length };
  const newTalkersString = JSON.stringify(
    prevTalkers.map((talker) => (+talker.id === +id ? newTalker : talker)),
  );
  writeData(newTalkersString);
};

module.exports = editData;
