const express = require('express');
const crypto = require('crypto');
const { hasCredentials } = require('../middlewares/index');
const { HTTP_OK_STATUS } = require('../httpStatusCodes');

const routes = express.Router();

routes.post('/login', hasCredentials, (req, res) => {
  try {
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(HTTP_OK_STATUS).json({ token });
  } catch (err) {
    console.log('Erro ao fazer login:', err);
  }
});

module.exports = routes;
