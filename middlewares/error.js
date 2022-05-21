const { HTTP_INTERNAL_ERROR_STATUS } = require('../httpStatusCodes');

const error = (err, req, res, next) => {
  res.status(err.status || HTTP_INTERNAL_ERROR_STATUS).json({ error: err.message });
  next();
};

module.exports = error;