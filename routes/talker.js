const express = require('express');
const { readFileSync } = require('fs');
const { checkNewTalkerInfo, tokenAuth } = require('../middlewares/index');
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

routes.post('/talker', tokenAuth, checkNewTalkerInfo, (req, res) => {
  res.status(HTTP_CREATED_STATUS).json({ message: 'Palestrante adicionado' });
});

module.exports = routes;
