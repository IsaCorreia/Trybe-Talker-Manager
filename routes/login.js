const express = require('express');
const crypto = require('crypto');
const { auth } = require('../middlewares/index');
const { HTTP_OK_STATUS } = require('../httpStatusCodes');

const routes = express.Router();

routes.post('/login', auth, (req, res) => {
  try {
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(HTTP_OK_STATUS).json({ token });
  } catch (err) {
    console.log('Erro:', err);
  }
});

module.exports = routes;
