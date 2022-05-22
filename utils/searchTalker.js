const readData = require('./readData');

const searchTalker = async (searchTerm) => {
  try {
    const talkers = await readData();
    const filteredSearch = talkers.filter((talker) =>
      talker.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredSearch;
  } catch (err) {
    throw Error({ Erro_ao_ler_dados: err.message });
  }
};

module.exports = searchTalker;
