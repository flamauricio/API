const express = require('express');
const app = express();
const morgan = require('morgan');


// TODA ROTA NOVA DEVE SER INSERIDA AQUI 
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


// CRIA O AMBIENTE DE DESENVOLVIMENTO
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// QUANDO NÃO ENCONTRA ROTA DECLARADA
app.use((req, res, next) =>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            Mensagem: error.message
        }
    });
});

module.exports = app;