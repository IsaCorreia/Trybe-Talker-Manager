const express = require('express');

const routes = express.Router();

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

routes.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    res.status(HTTP_OK_STATUS).json({ email, password });
  } catch (err) {
    res.status(HTTP_NOT_FOUND_STATUS).json({ err });
  }
});

module.exports = routes;
