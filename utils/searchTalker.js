const readData = require('./readData');

const searchTalker = async (searchTerm) => {
  const talkers = await readData();
  const filteredSearch = talkers.filter((talker) =>
    talker.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return filteredSearch;
};

module.exports = searchTalker;
