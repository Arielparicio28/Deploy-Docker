// Requerimos Express
const express = require('express');
// Creamos la aplicación
const app = express();
// Construimos una ruta
app.get('/', function (req, res) {
  res.send('Bienvenidos a mi aplicación NodeJS');
});
// Arrancamos el servidor
app.listen(3030, function () {
console.log('Arrancada la aplicación en http://localhost:3030');
});