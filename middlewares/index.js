const error = require('./error');
const hasCredentials = require('./hasCredentials');
const checkNewTalkerInfo = require('./checkNewTalkerInfo');
const tokenAuth = require('./tokenAuth');
const writeData = require('./writeData');
const deleteData = require('./deleteData');

module.exports = {
  error,
  hasCredentials,
  checkNewTalkerInfo,
  tokenAuth,
  writeData,
  deleteData,
};