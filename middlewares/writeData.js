const { readFile, writeFile } = require('fs').promises;

const writeData = async (req, res, next) => {
  const prevTalkers = await readFile('talker.json', 'utf-8');
  const newTalkers = JSON.parse(prevTalkers);
  newTalkers.push({ ...req.body, id: newTalkers.length + 1 });
  try {
    await writeFile('talker.json', JSON.stringify(newTalkers));
  } catch (err) {
    res.status(500).json({ Erro: err.message });
  }
  next();
};

module.exports = writeData;