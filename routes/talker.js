const express = require('express');
const { readFileSync } = require('fs');
const {
  checkName,
  checkAge,
  checkTalk,
  checkWatch,
  checkRate,
  tokenAuth,
} = require('../middlewares/middlewaresIndex');
const {
  writeData,
  deleteData,
  editData,
  readData,
  searchTalker,
} = require('../utils/utilsIndex');
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

routes.get('/talker/search', tokenAuth, async (req, res) => {
  const { q } = req.query;
  if (!q || q === '') res.status(HTTP_OK_STATUS).json(readData());

  const chosenTalker = await searchTalker(q);
  res.status(HTTP_OK_STATUS).json(chosenTalker);
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
  checkName,
  checkAge,
  checkTalk,
  checkWatch,
  checkRate,
  (req, res) => {
    const prevTalkers = readFileSync('talker.json', 'utf-8');
    const newTalkersObj = JSON.parse(prevTalkers);
    const newTalker = { ...req.body, id: newTalkersObj.length + 1 };
    newTalkersObj.push(newTalker);
    const newTalkersString = JSON.stringify(newTalkersObj);

    writeData(newTalkersString);
    res.status(HTTP_CREATED_STATUS).json(newTalker);
  },
);

routes.delete('/talker/:id', tokenAuth, (req, res) => {
  const { id } = req.params;
  deleteData(id);
  res.status(204).json({ message: `deleted ${id}` });
});

routes.put(
  '/talker/:id',
  tokenAuth,
  checkName,
  checkAge,
  checkTalk,
  checkWatch,
  checkRate,
  async (req, res) => {
    const { id } = req.params;
    editData(id, req.body);
    const newData = await readData();
    res.status(HTTP_OK_STATUS).json(newData);
  },
);

module.exports = routes;
