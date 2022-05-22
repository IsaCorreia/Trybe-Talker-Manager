const readData = require('./readData');

const editData = async (id, data) => {
  const prevTalkers = await readData();
  const chosenTalker = prevTalkers.filter((talker) => +talker.id === +id);
  console.log({
    request_id: id,
    request_data: data,
    stored_data: prevTalkers,
    chosen_talker: chosenTalker,
  });
};

module.exports = editData;