const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('./middlewares/index');

const { HTTP_OK_STATUS } = require('./httpStatusCodes');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

// ---------> NÃO REMOVER <---------
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
// ---------> NÃO REMOVER <---------

app.use('/', require('./routes/talker'));
app.use('/', require('./routes/login'));

app.use(error);

app.listen(PORT, () => {
  console.log('Online at port', PORT);
});
