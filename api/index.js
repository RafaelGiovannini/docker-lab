const express = require('express')
const app = express()
const port = 8081
const bodyParser = require('body-parser');
const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());


require('./src/controllers/authController')(app);
require('./src/controllers/homeController')(app);


app.get('/', (req, res) => {
  console.log("get /");
  res.send({ works: `Eu estou funcionando!!`, 
  cadastrar: `POST http://localhost:${port}/cadastro `,
  lista_cadastro: `GET http://localhost:${port}/cadastro/:id`,
  gato_mia: `GET http://localhost:${port}/gato`,
  gato_foto: `GET http://localhost:${port}/gato/:id`})

  console.log("\n");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})
