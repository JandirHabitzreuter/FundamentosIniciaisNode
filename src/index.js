// Iniciando servidor node, instalação do framework express para facilitar o desenvolvimento da aplicação

const { request, response } = require('express');
const express = require('express');

// executando a função express
const app = express();

// Criando uma rota de exemplo utilizando retorno com json
app.get("/", (request, response) => {
    return response.json({message:"Servidor inicializado"})
});

// ativando o servidor na porta 3333 - localhost:3333
app.listen(3333);