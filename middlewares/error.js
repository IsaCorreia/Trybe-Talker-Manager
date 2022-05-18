const error = (err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
  next();
};

module.exports = error;