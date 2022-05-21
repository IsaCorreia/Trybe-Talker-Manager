const error = require('./error');
const { hasCredentials, validateCredentials } = require('./hasCredentials');
const {
  checkName,
  checkAge,
  checkTalk,
  checkWatch,
  checkRate,
} = require('./checkNewTalkerInfo');
const tokenAuth = require('./tokenAuth');

module.exports = {
  error,
  hasCredentials,
  validateCredentials,
  checkName,
  checkAge,
  checkTalk,
  checkWatch,
  checkRate,
  tokenAuth,
};
