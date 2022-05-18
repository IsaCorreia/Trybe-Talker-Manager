const express = require('express');
const data = require('../talker.json');

const routes = express.Router();

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

routes.get('/talker', (req, res) => {
  try {
    res.status(HTTP_OK_STATUS).json(data);
  } catch (err) {
    res.status(HTTP_NOT_FOUND_STATUS).json({ err });
  }
});

module.exports = routes;
