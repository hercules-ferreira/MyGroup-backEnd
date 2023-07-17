// pacotes
require('dotenv/config');
const express = require('express');

// iniciar o express
const app = express();

// configurações
require('./db');
require('./configs')(app);

// middlewares gerais
const { isAuthenticated } = require('./middlewares/jwt.middleware');

// rotas
app.use('/auth', require('./routes/auth.routes'));


app.use('/likes', require('./routes/like.routes'));
app.use(isAuthenticated);
app.use('/user', require('./routes/user.routes'));

// gerenciamento de erros
require('./error-handling')(app);

// exportar app
module.exports = app;
