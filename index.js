const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// ---------> NÃO REMOVER <---------
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});
// ---------> NÃO REMOVER <---------

app.use('/', require('./routes/talker'));
app.use('/', require('./routes/login'));

app.listen(PORT, () => {
  console.log('Online at port', PORT);
});
