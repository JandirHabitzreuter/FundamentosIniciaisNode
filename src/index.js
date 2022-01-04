// Iniciando servidor node, instalação do framework express para facilitar o desenvolvimento da aplicação
const express = require('express');

// executando a função express
const app = express();

// Função para utilizar json na aplicação
app.use(express.json());

// Exemplo de rota para buscar dados: GET
app.get("/courses", (request, response) => {
    return response.json(["curso1", "curso2", "curso3"])
});

// Exemplo de rota para inserir dados: POST
app.post("/courses", (request, response) => {
    const {name,age} = request.body;
    return response.json({name,age});
});


// Exemplo de rota para atualizar todos os dados: PUT
app.put("/courses/:id", (request, response) => {
    const {id} = request.params;
    return response.json({id});
});

// Exemplo de rota para atualizar somente parte dos dados: PATCH
app.patch("/courses/:id", (request, response) => {
    const {id} = request.params;
    return response.json({id});
});

// Exemplo de rota para excluir dados: DELETE
app.delete("/courses/:id", (request, response) => {
    const {id} = request.params;
    return response.json({id});
});

// ativando o servidor na porta 3333 - localhost:3333
app.listen(3333);

// Tipos de parâmetros 
// Routes Params: Parâmetros na rota, identificar um recurso para editar, deletar, buscar
// Query Params : Parâmetro na rota com ?  ex: /courses?page&order=asc - Paginação, filtro
// Body Params: Parâmetros de corpo - Objetos para inserção ou alteração de recursos