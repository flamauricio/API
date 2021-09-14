const express = require('express');
const app = express();

// TODA ROTA NOVA DEVE SER INSERIDA AQUI 
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

module.exports = app;