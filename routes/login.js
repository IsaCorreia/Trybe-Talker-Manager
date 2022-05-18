const express = require('express');
const crypto = require('crypto');
const { HTTP_OK_STATUS } = require('../httpStatusCodes');

const routes = express.Router();

routes.post('/login', (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = routes;
