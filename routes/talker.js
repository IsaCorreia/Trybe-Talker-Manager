const express = require('express');
const { readFileSync } = require('fs');

const { HTTP_OK_STATUS } = require('../httpStatusCodes');

const routes = express.Router();

routes.get('/talker', (req, res) => {
  const data = JSON.parse(readFileSync('talker.json', 'utf-8'));
  res.status(HTTP_OK_STATUS).json(data);
});

module.exports = routes;
