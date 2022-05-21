const error = require('./error');
const hasCredentials = require('./hasCredentials');
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
  checkName,
  checkAge,
  checkTalk,
  checkWatch,
  checkRate,
  tokenAuth,
};
