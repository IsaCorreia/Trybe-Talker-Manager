const express = require('express');
const { readFileSync } = require('fs');
const { readFile } = require('fs').promises;
const {
  checkNewTalkerInfo,
  tokenAuth,
  writeData,
  // deleteData,
} = require('../middlewares/index');
const {
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND_STATUS,
  HTTP_CREATED_STATUS,
} = require('../httpStatusCodes');

const routes = express.Router();

routes.get('/talker', (req, res) => {
  const data = JSON.parse(readFileSync('talker.json', 'utf-8'));
  res.status(HTTP_OK_STATUS).json(data);
});

routes.get('/talker/:id', (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(readFileSync('talker.json', 'utf-8'));
  const chosenTalker = talkers.find((talker) => +talker.id === +id);

  if (!chosenTalker) {
    res
      .status(HTTP_NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(HTTP_OK_STATUS).json(chosenTalker);
});

routes.post(
  '/talker',
  tokenAuth,
  checkNewTalkerInfo,
  writeData,
  async (req, res) => {
    const data = await readFile('talker.json', 'utf-8');
    const talkers = JSON.parse(data);
    const lastTalker = talkers[talkers.length - 1];
    try {
      res.status(HTTP_CREATED_STATUS).json(lastTalker);
    } catch (err) {
      console.log({ Erro: err.message });
    }
  },
);

// routes.delete('/talker/:id', tokenAuth, deleteData, (req, res) => {
//   const { id } = req.params;
//   res.status(204).json({ message: `deleted ${id}` });
// });

module.exports = routes;
