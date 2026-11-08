const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res = res.json()
})

app.listen(3000, () => {
    console.log("Rodando porta 3000");
})


// [7] API DE TAREFAS (BACKEND)
// Arquivo: api_tarefas.js

// Objetivo:
// Mover lógica do front para o backend.

// Fluxo:
// frontend envia tarefa
// ↓
// backend salva em array
// ↓
// retorna lista

// Passos:

// * criar array tarefas
// * criar rota GET /tarefas
// * criar rota POST /tarefas
// * testar com fetch

// Conceitos:
// CRUD (básico)
// GET
// POST
