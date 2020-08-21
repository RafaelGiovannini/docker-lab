const express = require('express')
const app = express()
const middleware = require('./config/middleware');

middleware.cfgMiddlewares(app);

app.get('/', (req, res) => {
  res.send({ works: `Eu estou funcionando!!`, 
  cadastrar: `POST /api/v1/auth/register`,
  lista_cadastro: `GET /api/v1/auth/user/:id`,
  autenticar: `POST /api/v1/auth/login`,
  gato_mia: `GET /api/v1/cat`});
});

module.exports = app;