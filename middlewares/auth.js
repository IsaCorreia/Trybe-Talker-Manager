const validateCredentials = (email, password) => {
  const validEmail = new RegExp(/@./);
  const validPassword = new RegExp(/....../);
  if (!validEmail.test(email)) {
    throw new Error({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  if (!validPassword.test(password)) {
    throw new Error({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
};

const auth = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) throw new Error({ message: 'o campo "email" é obrigatório' });
  if (!password) throw new Error({ message: 'o campo "password" é obrigatório' });
  validateCredentials(email, password);
  next();
};

module.exports = auth;
