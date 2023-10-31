const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Simulando una base de datos en memoria
let productos = [
  { id: 1, nombre: 'Producto 1', precio: 10.0 },]